
import InstagramMainComponent from "./InstagramMainComponent";
import InstagramRegisterComponent from "./InstagramRegisterComponent";
import './InstagramRegisterComponent.css';

export default function InstagramIndexComponent(){
    return(
    
        <div className="container-fluid">
            <div className="box">
                <header>
                </header>
                <section>
                    <main>
                        <div style={{display:"flex"}}>
                        <InstagramMainComponent/>
                        <InstagramRegisterComponent/>
                        </div>
                    </main>
                </section>
            </div>
        </div>
    
    )
}