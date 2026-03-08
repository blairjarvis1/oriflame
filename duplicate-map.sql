-- ─────────────────────────────────────────────────────────
--  Duplicate Journey Map
--  Paste this into the Supabase SQL Editor and click Run.
--  It copies all data from the first map into a new one.
-- ─────────────────────────────────────────────────────────

DO $$
DECLARE
  old_map_id   uuid;
  new_map_id   uuid;
  old_stage    RECORD;
  new_stage_id uuid;
BEGIN

  -- 1. Get the existing map
  SELECT id INTO old_map_id FROM journey_maps ORDER BY created_at LIMIT 1;

  -- 2. Create the new map  (edit the title here if you like)
  INSERT INTO journey_maps (title)
  VALUES ('Members Digital Experience Map – Oriflame (V2)')
  RETURNING id INTO new_map_id;

  -- 3. Copy key takeaways
  INSERT INTO key_takeaways (journey_map_id, text, sort_order)
  SELECT new_map_id, text, sort_order
  FROM key_takeaways
  WHERE journey_map_id = old_map_id;

  -- 4. Loop through each stage and copy it + all child data
  FOR old_stage IN
    SELECT * FROM stages WHERE journey_map_id = old_map_id ORDER BY sort_order
  LOOP

    INSERT INTO stages (
      journey_map_id, stage_number, icon, short_name, name, objective,
      sentiment_label, sentiment_score, sentiment_desc, sort_order
    ) VALUES (
      new_map_id, old_stage.stage_number, old_stage.icon, old_stage.short_name,
      old_stage.name, old_stage.objective, old_stage.sentiment_label,
      old_stage.sentiment_score, old_stage.sentiment_desc, old_stage.sort_order
    )
    RETURNING id INTO new_stage_id;

    INSERT INTO stage_steps (stage_id, text, sort_order)
    SELECT new_stage_id, text, sort_order FROM stage_steps WHERE stage_id = old_stage.id;

    INSERT INTO stage_kpis (stage_id, value, label, note, sort_order)
    SELECT new_stage_id, value, label, note, sort_order FROM stage_kpis WHERE stage_id = old_stage.id;

    INSERT INTO stage_evidence (stage_id, type, source, title, body, impact, sort_order)
    SELECT new_stage_id, type, source, title, body, impact, sort_order FROM stage_evidence WHERE stage_id = old_stage.id;

    INSERT INTO stage_challenges (stage_id, title, body, note)
    SELECT new_stage_id, title, body, note FROM stage_challenges WHERE stage_id = old_stage.id;

    INSERT INTO stage_touchpoints (stage_id, text, sort_order)
    SELECT new_stage_id, text, sort_order FROM stage_touchpoints WHERE stage_id = old_stage.id;

    INSERT INTO stage_images (stage_id, url, sort_order)
    SELECT new_stage_id, url, sort_order FROM stage_images WHERE stage_id = old_stage.id;

  END LOOP;

  RAISE NOTICE 'Done! New map ID: %', new_map_id;

END $$;
