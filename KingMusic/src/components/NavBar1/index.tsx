import React,{ FC, ReactNode } from "react";
import './index.less'
class NavBar1 extends React.Component<any,any>{
    constructor(props:any){
        super(props);
    }
    render(): ReactNode {        
        return (
            <div className="navbar-box">
                {this.props.children}
            </div>
        )
    }
    
}

export default NavBar1;