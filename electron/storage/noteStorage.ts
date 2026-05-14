/**
 * Copyright (c) 2026 SolisWare.
 *
 * All rights reserved. Licensed under the MIT license.
 * See the LICENSE.txt file in the project root directory for details.
 */
import * as fs from "node:fs";
import * as path from "path";
import { NoteType } from "../../src/models/NoteType";

export function setNote(appDataDir: string, note: NoteType): void {
  const filePath = path.join(appDataDir, `${note.id}.json`);
  const serializedNote = JSON.stringify(note);

  fs.writeFile(filePath, serializedNote, (err) => {
    if (err) {
      console.error(err);
      // TODO: Throw an exception and send callback to the renderer.
    }
  });
}

export async function getNotes(appDataDir: string): Promise<NoteType[]> {
  const files = await fs.promises.readdir(appDataDir);
  const notes = await Promise.all(
    files.map(async (file): Promise<NoteType | null> => {
      try {
        const filePath = path.join(appDataDir, file);
        const content = await fs.promises.readFile(filePath, "utf-8");
        const parsed = JSON.parse(content) as NoteType;

        return {
          ...parsed,
          createdOn: new Date(parsed.createdOn),
          lastModifiedOn: new Date(parsed.lastModifiedOn)
        };
      } catch (err) {
        console.warn(`Skipping corrupt note file: ${file}`);
        // TODO: We might want to consider an exception so a warning can be displayed.
        return null;
      }
    })
  );

  return notes
    .filter((note): note is NoteType => note !== null)
    .sort((oldestNote, latestNote) => oldestNote.createdOn.getTime() - latestNote.createdOn.getTime());
}

export function deleteNote(appDataDir: string, noteId: string): void {
  const filePath = path.join(appDataDir, `${noteId}.json`);

  console.log("Deleting:", filePath);
  fs.unlink(filePath, (err) => {
    if (err) {
      console.log(err);
      // TODO: Error handling
    }
  });
}

export function deleteAllNotes(appDataDir: string): void {
  console.log("Deleting all files in :", appDataDir);
  fs.promises.readdir(appDataDir)
    .then((files) => Promise.all(
      files
        .map((file) => fs.promises.unlink(path.join(appDataDir, file)))
    ))
    .catch((err) => {
      console.log(err);
      // TODO: Error handling
    });
}
