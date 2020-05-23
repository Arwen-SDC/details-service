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


    let btnImage;

    if (hidden) {
      btnImage = <img src="https://aragorn-images.s3-us-west-2.amazonaws.com/more-details.svg" alt="" style={{ width: '90px', height: '33px' }} />;
    } else {
      btnImage = <img src="https://aragorn-images.s3-us-west-2.amazonaws.com/less-details.svg" alt="" style={{ width: '90px', height: '33px' }} />;
    }


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
          </>
        )}
        <button type="button" onClick={() => this.setState({ hidden: !hidden })}>
          {btnImage}
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
    margin-top: 0;
  }
  button {
    display: flex;
    margin: 0 auto;
    outline: none;
    padding: 0;
    border: none;
    cursor: pointer;
  }
`;


Details.propTypes = {
  details: PropTypes.string.isRequired,
};

export default Details;
