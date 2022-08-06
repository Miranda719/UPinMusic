import React from 'react';
class BtnPlayer extends React.Component<any, any>{
    constructor(props:any){
        super(props);
    }

    render(): React.ReactNode {
        return (
            <div >
                {this.props.children}
            </div>
        )
    }
}
export default BtnPlayer;