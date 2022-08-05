import React, { FC } from "react";
import styles from './index.less';
type Props = {
    result?: any
}
const Type1018: FC<Props> = (props) => {
    const list = props.result.playList.playLists;
    // {console.log(props.result.song),'hhhhhhhhhhhhhhhhhhhhhhhhh'}
    return (

        <div>
            {list && <div className={styles.list}>
                {list.map(item => (

                    <div key={item.id}>
                        <img className={styles.pic} src={item.coverImgUrl}></img>
                        <p className={styles.listItem} >{item.name}</p>
                    </div>
                ))}
            </div>}
        </div>

    )
}

export default Type1018;