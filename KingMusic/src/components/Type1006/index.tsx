import React, { FC } from "react";
import styles from './index.less';
type Props = {
    result?: any
}
const Type1006: FC<Props> = (props) => {
    const list = props.result.songs
    return (

        <div>
            {list && <div className={styles.list}>
                {list.map(item => (
                    <p className={styles.listItem} key={item.id}>{item.lyrics.txt}</p>
                ))}
            </div>}
        </div>
    )
}

export default Type1006;