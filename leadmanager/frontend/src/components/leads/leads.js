import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getLeads, deleteLead } from "../../action/leads";

export class leads extends Component {
  static propTypes = {
    leads: PropTypes.array.isRequired, // setting it as props
    getLeads: PropTypes.func.isRequired,
    deleteLead: PropTypes.func.isRequired,
  };

  //calling the HTTP request before component mount
  componentDidMount() {
    this.props.getLeads();
  }

  render() {
    return (
      <Fragment>
        <h3>Leads</h3>
        <table className="table table-stripped">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Message</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {this.props.leads.map((lead) => (
              <tr key={lead.id}>
                <td>{lead.id}</td>
                <td>{lead.name}</td>
                <td>{lead.email}</td>
                <td>{lead.message}</td>
                <td>
                  <button
                    onClick={this.props.deleteLead.bind(this, lead.id)}
                    className="btn btn-danger btn-sm"
                  >
                    DELETE
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Fragment>
    );
  }
}

//To get the leads  where the state of redux to prop of this.component
const mapStateToProps = (state) => ({
  leads: state.leads.leads, // state.leads = > reducers // state.leads.leads => leadReducer.leads
});
export default connect(mapStateToProps, { getLeads, deleteLead })(leads); //calling the methods in connect,
//getLeads is a HTTP request from Axio
