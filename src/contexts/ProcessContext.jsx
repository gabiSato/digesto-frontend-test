import React from "react";
import axios from "axios";

const ProcessContext = React.createContext({});

class ProcessProvider extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      process: null,
      isLoading: false,
    };
  }

  getProcess = (cnj = "") => {
    const endpoint = `/tribproc/${cnj}?tipo_numero=8`;

    this.setState({ isLoading: true });

    return new Promise((resolve, reject) => {
      axios
        .get(endpoint)
        .then((response) => {
          if (response.data?.status_op) reject(response.data.status_op);

          this.setState({ process: response?.data }, resolve);
        })
        .catch(reject)
        .finally(() => {
          this.setState({ isLoading: false });
        });
    });
  };

  render() {
    const value = {
      state: this.state,
      action: {
        getProcess: this.getProcess,
      },
    };

    return (
      <ProcessContext.Provider value={value}>
        {this.props.children}
      </ProcessContext.Provider>
    );
  }
}

export { ProcessContext, ProcessProvider };
