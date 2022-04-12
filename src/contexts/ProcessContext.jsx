import React from "react";
import axios from "axios";

const ProcessContext = React.createContext({});

class ProcessProvider extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      process: null,
      isLoading: false
    };
  }

  getProcess = async (cnj = "") => {
    const endpoint = `/tribproc/${cnj}?tipo_numero=8`;

    axios.get(endpoint)
      .then(response => {
        if (response.data?.status_op) return

        console.log(response?.data)
      })
      .catch(error => { console.log(error.response) });
  };

  render() {
    const value = {
      state: this.state,
      action: {
        getProcess: this.getProcess
      }
    };

    return (
      <ProcessContext.Provider value={value}>
        {this.props.children}
      </ProcessContext.Provider>
    );
  }
}

export { ProcessContext, ProcessProvider };
