export async function normalizeFile(file: File) {
  const buffer = await file.arrayBuffer();

  return new File(
    [buffer],
    file.name,
    {
      type: file.type,
      lastModified: Date.now(),
    }
  );
}