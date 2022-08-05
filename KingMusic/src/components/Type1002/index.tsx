import React, { FC } from "react";
import styles from './index.less';
type Props = {
    result?: any
}
const Type1002: FC<Props> = (props) => {
    const list = props.result.userprofiles
    return (
        <div >
            {list && <div className={styles.list}>
                {list.map(item => (
                    <img className={styles.pic} key={item.userId} src={item.avatarUrl}></img>
                ))}
            </div>}
        </div>
    )
}

export default Type1002;


