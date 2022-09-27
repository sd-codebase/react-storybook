import style from './Avatar.module.scss';

export const Avatar = ({avatar, size, variant, isGroupedItem, extraCount}) => {
  const avatarSize = {
    'large': style.large,
    'medium': style.medium,
    'small': style.small,
    'tiny': style.tiny,
  };

  const avatarVariant = {
    'purple': style.purple,
    'gray': style.gray,
    'dark': style.dark,
  };

  const hasText = () => extraCount > 0 || !avatar || !avatar.imgSrc;
  const getAccessibleName = () => `Avatar image of ${avatar.name}`;
  const getInitial = () => avatar.name.trim()[0];

  return <>
    <div className={`${style.avatarContainer} ${avatarSize[size]} ${avatarVariant[variant]} ${hasText() && style.hasText} ${isGroupedItem && style.groupedItem}`} data-testid='avatar-container'>
      {
        extraCount > 0 ?
        <div className={`${style.avatarText} ${style.extraCount}`} data-testid='avatar-extra'>+{extraCount}</div>
        :
        avatar.imgSrc ? 
          <img className={style.avatarImage} src={avatar.imgSrc} alt={getAccessibleName()} data-testid='avatar-image'></img> : 
          <div className={style.avatarText} data-testid='avatar-text'>{getInitial()}</div>
      }
    </div>
  </>;
}