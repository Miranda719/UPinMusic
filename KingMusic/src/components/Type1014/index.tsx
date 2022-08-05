import React, { FC } from "react";
import styles from './index.less';
type Props = {
    result?: any
}
const Type10: FC<Props> = (props) => {
    const list = props.result.videos
    return (

        <div >
            {list && <div className={styles.list}>
                {list.map(item => (
                    <div key={item.coverUrl}>
                        <img className={styles.pic} src={item.coverUrl}></img>
                        <p className={styles.listItem} >{item.title}</p>
                    </div>
                ))}
            </div>}
        </div>
    )
}

export default Type10;