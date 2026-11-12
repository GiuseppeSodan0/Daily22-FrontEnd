import type {Article} from '../blog/articles';

interface ArticleCoverProps {
  cover: Article['cover'];
  sizes: string;
  className: string;
  priority?: boolean;
}

export default function ArticleCover({cover, sizes, className, priority = false}: ArticleCoverProps) {
  if (!cover?.asset) return null;

  const {asset, alt, title} = cover;
  const srcSet = asset.variants?.length
    ? [...asset.variants, {src: asset.src, width: asset.width}].map(({src, width}) => `${src} ${width}w`).join(', ')
    : undefined;

  return (
    <img
      src={asset.src}
      srcSet={srcSet}
      sizes={sizes}
      width={asset.width}
      height={asset.height}
      alt={alt}
      title={title}
      loading={priority ? undefined : 'lazy'}
      fetchPriority={priority ? 'high' : undefined}
      className={className}
    />
  );
}
