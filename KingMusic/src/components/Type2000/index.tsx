import React, { FC } from "react";
import styles from './index.less';
type Props = {
    result?: any
}
const Type2000: FC<Props> = (props) => {
    const list = props.result.resources
    return (

        <div>
            {list && <div className={styles.list}>
                {list.map(item => (
                    <div key={item.resourceId}>
                        <img className={styles.pic} src={item.uiElement.image.imageUrl}></img>
                        <p className={styles.listItem} >{item.uiElement.mainTitle.title}</p>
                    </div>
                ))}
            </div>}

        </div>
    )
}

export default Type2000;