import React from "react";
import axios from "axios";

const ProcessContext = React.createContext({});

export const STATUS = {
  IDLE: "IDLE",
  LOADING: "LOADING",
  SUCCESS: "SUCCESS",
  NO_RESULT: "NO_RESULT",
  ERROR: "ERROR",
};

class ProcessProvider extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      process: null,
      status: STATUS.IDLE,
      statusMessage: null,
    };
  }

  onSuccess = (process) => {
    this.setState({ process, status: STATUS.SUCCESS, statusMessage: null });
  };

  onNoResult = (statusMessage) => {
    this.setState({ process: null, status: STATUS.NO_RESULT, statusMessage });
  };

  onError = () => {
    this.setState({
      process: null,
      status: STATUS.ERROR,
      statusMessage: "Algum erro ocorreu. Tente novamente mais tarde.",
    });
  };

  getProcess = (cnj = "") => {
    const endpoint = `/tribproc/${cnj}?tipo_numero=8`;

    this.setState({ status: STATUS.LOADING });

    return axios
      .get(endpoint)
      .then((response) => {
        response.data?.status_op
          ? this.onNoResult(response.data?.status_op)
          : this.onSuccess(response?.data);
      })
      .catch(this.onError);
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
