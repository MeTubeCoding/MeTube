import PropTypes from 'prop-types';
import React, { useState } from 'react';
import '../index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBan, faBars } from '@fortawesome/free-solid-svg-icons';
import { Modal, Dropdown} from 'react-bootstrap';

export function Menu_parametre() {
  const [showModal, setShowModal] = useState(false);
  const [showDescription, setShowDescription] = useState(false);
  const [showNotRecommended, setShowNotRecommended] = useState(false);
  const [showReport, setShowReport] = useState(false);
  const [showFeedback, setShowFeedback] = useState(false);

  const handleShowModal = () => {
    setShowModal(true);
  };
  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleShowDescription = () => {
    setShowDescription(!showDescription);
    setShowNotRecommended(false);
    setShowReport(false);
    setShowFeedback(false);
  };

  const handleShowNotRecommended = () => {
    setShowNotRecommended(!showNotRecommended);
    setShowDescription(false);
    setShowReport(false);
    setShowFeedback(false);
  };

  const handleShowReport = () => {
    setShowReport(!showReport);
    setShowDescription(false);
    setShowNotRecommended(false);
    setShowFeedback(false);
  };

  const handleShowFeedback = () => {
    setShowFeedback(!showFeedback);
    setShowDescription(false);
    setShowNotRecommended(false);
    setShowReport(false);
  };

  return(
    <Modal show={showModal} onHide={handleCloseModal}>
      <Modal.Header closeButton>
        <Modal.Title>Settings</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Dropdown show={showDescription}>
          <Dropdown.Toggle variant="light" id="dropdown-description" onClick={handleShowDescription}>
            <FontAwesomeIcon icon={faBars} className="mr-2" />
            Description
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">
              <FontAwesomeIcon icon={faBars} className="mr-2" onClick={handleShowFeedback} />
              Option 1
            </Dropdown.Item>
            <Dropdown.Item href="#/action-2">
              <FontAwesomeIcon icon={faBars} className="mr-2" onClick={handleShowFeedback} />
              Option 2
            </Dropdown.Item>
            <Dropdown.Item href="#/action-3">
              <FontAwesomeIcon icon={faBars} className="mr-2" onClick={handleShowFeedback} />
              Option 3
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <Dropdown show={showNotRecommended}>
          <Dropdown.Toggle variant="light" id="dropdown-not-recommended" onClick={handleShowNotRecommended}>
            <FontAwesomeIcon icon={faBan} className="mr-2" />
            Ne pas recommander cette chaine
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">
              <FontAwesomeIcon icon={faBars} className="mr-2" onClick={handleShowFeedback} />
              Option 1
            </Dropdown.Item>
            <Dropdown.Item href="#/action-2">
              <FontAwesomeIcon icon={faBars} className="mr-2" onClick={handleShowFeedback} />
              Option 2
            </Dropdown.Item>
            <Dropdown.Item href="#/action-3">
              <FontAwesomeIcon icon={faBars} className="mr-2" onClick={handleShowFeedback} />
              Option 3
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <Dropdown show={showReport}>
          <Dropdown.Toggle variant="light" id="dropdown-report" onClick={handleShowReport}>
            <FontAwesomeIcon icon={faBars} className="mr-2" onClick={handleShowFeedback} />
            Signaler
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">
              <FontAwesomeIcon icon={faBars} className="mr-2" onClick={handleShowFeedback} />
              Option 1
            </Dropdown.Item>
            <Dropdown.Item href="#/action-2">
              <FontAwesomeIcon icon={faBars} className="mr-2" onClick={handleShowFeedback} />
              Option 2
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Modal.Body>
    </Modal>
  );
}