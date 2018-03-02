import React from "react";

class oneContacts extends React.Component {
    render () {
        return (
            <div className="col-sm-6 col-md-4">
                <div className="thumbnail">
                    <img src="images.jpg" alt="..."/>
                    <div className="caption">
                        <h3>Ярлык эскиза</h3>
                        <p>jvnfdjbndjnbkfdnbkndkn svdvd rgvfdsv dgdb</p>
                        <p><a href="#" className="btn btn-primary" role="button">Кнопка</a> <a href="#" className="btn btn-default" role="button">Кнопка</a></p>
                    </div>
                </div>
            </div>
        )
    }
};

export default oneContacts;