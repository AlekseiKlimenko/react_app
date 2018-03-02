import React from "react";

class createContactForm extends React.Component {
    render () {
        return (
            <form>
                <div className="form-group row">
                    <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Name</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" id="inputEmail3" placeholder="Name"/>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Surname</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" id="Surname" placeholder="Surname"/>
                    </div>
                </div>
                <fieldset className="form-group">
                    <div className="row">
                        <legend className="col-form-label col-sm-2 pt-0">Category</legend>
                        <div className="col-sm-10">
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="Other" id="Other" value="option1" defaultChecked  />
                                <label className="form-check-label" htmlFor="Other">
                                    Other
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="Family" id="Family" value="option2" />
                                <label className="form-check-label" htmlFor="Family">
                                    Family
                                </label>
                            </div>
                            <div className="form-check disabled">
                                <input className="form-check-input" type="radio" name="Friends" id="Friends" value="option3" />
                                <label className="form-check-label" htmlFor="Friends">
                                    Friends
                                </label>
                            </div>
                            <div className="form-check disabled">
                                <input className="form-check-input" type="radio" name="Work" id="Work" value="option4" />
                                <label className="form-check-label" htmlFor="Work">
                                    Work
                                </label>
                            </div>
                        </div>
                    </div>
                </fieldset>
                <div className="form-group row">
                    <div className="col-sm-2">Checkbox</div>
                    <div className="col-sm-10">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="gridCheck1"/>
                            <label className="form-check-label" htmlFor="gridCheck1">
                                Important
                            </label>
                        </div>
                    </div>
                </div>
                <div className="form-group row">
                    <div className="col-sm-10">
                        <button type="submit" className="btn btn-primary">Create contact</button>
                    </div>
                </div>
            </form>
        )
    }
};

export default createContactForm;