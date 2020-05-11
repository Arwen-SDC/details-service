import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';


class Details extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hidden: true,
    };
  }

  render() {
    const { hidden } = this.state;
    const { details } = this.props;


    return (
      <DetailsWrapper>
        <h1>
          DETAILS
        </h1>
        <>
          <p>
            <b>{details.substr(0, details.indexOf('.') + 2)}</b>
            {details}
          </p>
          <p>
            <b>{details.substr(0, details.indexOf('.') + 2)}</b>
            {details}
          </p>
        </>
        {hidden ? null : (
          <>
            <p>
              <b>{details.substr(0, details.indexOf('.') + 2)}</b>
              {details}
            </p>
            <p>
              <b>{details.substr(0, details.indexOf('.') + 2)}</b>
              {details}
            </p>
            <p>
              <b>{details.substr(0, details.indexOf('.') + 2)}</b>
              {details}
            </p>
          </>
        )}
        <button type="button" onClick={() => this.setState({ hidden: !hidden })}>
          More / Less Details
        </button>
      </DetailsWrapper>
    );
  }
}

const DetailsWrapper = styled.div`
  margin: 0 auto;
  padding: 40px 12px 40px;
  font-family: Montserrat,sans-serif;
  font-weight: 400;
  text-align: left;
  border-bottom: 1px solid lightgrey;
  p {
    line-height: 1.5rem;
    font-size: 1rem;
  }
  h1 {

    text-align: center;
    margin-bottom: 20px;
    font-size: 2.25rem;
    font-weight: 900!important;
    line-height: 1.2;
  }
  button {
    display: flex;
    margin: 0 auto;
  }
`;


Details.propTypes = {
  details: PropTypes.string.isRequired,
};

export default Details;