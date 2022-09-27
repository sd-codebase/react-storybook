import style from './Image.module.scss';

export const Image = ({imgSrc, alt, size, variant}) => {
  const imageSize = {
    'large': style.large,
    'medium': style.medium,
    'small': style.small,
    'tiny': style.tiny,
  };
  const imageVariant = {
    'purple': style.purple,
    'gray': style.gray,
    'dark': style.dark,
  };

  return <>
    <div className={`${style.imageContainer} ${imageSize[size]} ${imageVariant[variant]}`} data-testid='image-container'>
      <img src={imgSrc} alt={alt} data-testid='image'></img>
    </div>
  </>;
}