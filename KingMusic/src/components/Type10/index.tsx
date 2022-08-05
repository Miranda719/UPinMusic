import React, { FC } from "react";
import styles from './index.less';
type Props = {
    result?: any
}
const Type10: FC<Props> = (props) => {
    const list = props.result.albums
    return (

        <div className={styles.container}>
            {list && <div className={styles.list}>
                {list.map(item => (
                   <div key={item.id}>
                   <img className={styles.pic} src={item.picUrl}></img>
                   <p className={styles.listItem} >{item.name}</p>
               </div>
                ))}
            </div>}
        </div>
    )
}

export default Type10;