import React, { FC } from "react";
import styles from './index.less';
type Props = {
    result?: any
}
const Type1: FC<Props> = (props) => {
    const list = props.result.songs
    return (

        <div className={styles.container}>
            {list && <div className={styles.list}>
                {list.map(item => (
                    <p className={styles.listItem} key={item.id}>{item.name}</p>
                ))}
            </div>}
        </div>
    )
}

export default Type1;