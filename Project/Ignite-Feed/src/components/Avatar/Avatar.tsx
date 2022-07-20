import styles from "./Avatar.module.css"

interface AvatarProps{
    profile: string;
    hasBorder?: boolean;
}

export const Avatar = ({profile, hasBorder}:AvatarProps) =>{

    return (
        <img className={hasBorder ? styles.profileImgHasBorder : styles.profileImg} src={profile} alt="Github Profile" />
    )
}