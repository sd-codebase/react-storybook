import { Avatar } from "../Avatar/Avatar.component";
import style from './AvatarGroup.module.scss';

export const AvatarGroup = ({users, size, variant}) => {
  const visibleUsers = users.slice(0,2);
  const extraCount = users.length > 2 ? users.length - 2 : 0 ;
  return <div className={style.avtarGroupContainer}>
    {
      visibleUsers.map((user, key) => {
        return <Avatar
          key={key}
          avatar={user}
          size={size}
          variant={variant}
          isGroupedItem={true}>
        </Avatar>;
      })
    }

    {
      extraCount > 0 ? 
        <Avatar
          size={size}
          variant={variant}
          isGroupedItem={true}
          extraCount={extraCount}>
        </Avatar> : null
    }
  </div>
}