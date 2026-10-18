import type { ImageMetadata } from 'astro';

// Every image in src/assets/images is picked up automatically and optimized at build time.
// Reference an image by its file name without the extension: 'amplify-thumbnail-goblin'.
// If a file is missing, <Media> renders a neutral placeholder instead of breaking the build.
const files = import.meta.glob<{ default: ImageMetadata }>('/src/assets/images/**/*.{png,jpg,jpeg,webp,avif}', {
  eager: true,
});

const byName = new Map<string, ImageMetadata>();
for (const [path, mod] of Object.entries(files)) {
  const base = path.split('/').pop()!.replace(/\.[^.]+$/, '');
  byName.set(base, mod.default);
}

export function findImage(name?: string): ImageMetadata | undefined {
  return name ? byName.get(name) : undefined;
}
