import React from 'react';
import PropTypes from 'prop-types';

/**
 * Participant list SVG Icon
 *
 * @param {object} props  Data passed to the component
 * @param {number} props.size  Width and height of the icon
 * @param {string} props.className  Additional className for the component
 * @param {object} props.style  Inline style object for the component
 * @returns {object} JSX of the icon
 *
 */
export default function ParticipantListIcon({size, className, style}) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={`wxc-icon ${className}`} style={style}>
      <path d="M13.5 15.7502C13.5 15.8487 13.5194 15.9462 13.557 16.0372C13.5947 16.1282 13.65 16.2109 13.7196 16.2806C13.7893 16.3502 13.872 16.4054 13.963 16.4431C14.054 16.4808 14.1515 16.5002 14.25 16.5002H21.75C21.9489 16.5002 22.1397 16.4211 22.2803 16.2805C22.421 16.1398 22.5 15.9491 22.5 15.7502C22.5 15.5513 22.421 15.3605 22.2803 15.2198C22.1397 15.0792 21.9489 15.0002 21.75 15.0002H14.25C14.1515 15.0001 14.054 15.0195 13.963 15.0572C13.872 15.0949 13.7893 15.1501 13.7196 15.2198C13.65 15.2894 13.5947 15.3721 13.557 15.4631C13.5194 15.5541 13.5 15.6517 13.5 15.7502Z" fill="var(--wxc-icon--participant-list--color)" fillOpacity="0.95" />
      <path d="M21.75 18.0002H14.25C14.0511 18.0002 13.8603 18.0792 13.7197 18.2198C13.579 18.3605 13.5 18.5513 13.5 18.7502C13.5 18.9491 13.579 19.1398 13.7197 19.2805C13.8603 19.4211 14.0511 19.5002 14.25 19.5002H21.75C21.9489 19.5002 22.1397 19.4211 22.2803 19.2805C22.421 19.1398 22.5 18.9491 22.5 18.7502C22.5 18.5513 22.421 18.3605 22.2803 18.2198C22.1397 18.0792 21.9489 18.0002 21.75 18.0002Z" fill="var(--wxc-icon--participant-list--color)" fillOpacity="0.95" />
      <path d="M21.75 21.0002H14.25C14.0511 21.0002 13.8603 21.0792 13.7197 21.2198C13.579 21.3605 13.5 21.5513 13.5 21.7502C13.5 21.9491 13.579 22.1398 13.7197 22.2805C13.8603 22.4211 14.0511 22.5002 14.25 22.5002H21.75C21.9489 22.5002 22.1397 22.4211 22.2803 22.2805C22.421 22.1398 22.5 21.9491 22.5 21.7502C22.5 21.5513 22.421 21.3605 22.2803 21.2198C22.1397 21.0792 21.9489 21.0002 21.75 21.0002Z" fill="var(--wxc-icon--participant-list--color)" fillOpacity="0.95" />
      <path d="M11.2215 20.9819C7.8644 21.102 4.78237 20.3864 3.54933 19.1977C3.38278 19.0559 3.24783 18.8808 3.15321 18.6836C3.05859 18.4864 3.0064 18.2715 3.00002 18.0529C3.00002 14.3651 6.43471 11.2502 10.5 11.2502C12.2316 11.2486 13.9158 11.816 15.2933 12.8652C15.3714 12.9253 15.4606 12.9694 15.5558 12.995C15.6509 13.0207 15.7502 13.0273 15.8479 13.0146C15.9457 13.0018 16.0399 12.9699 16.1253 12.9207C16.2107 12.8715 16.2856 12.806 16.3456 12.7278C16.4057 12.6497 16.4497 12.5605 16.4753 12.4653C16.5008 12.3701 16.5074 12.2708 16.4945 12.1731C16.4817 12.0754 16.4497 11.9812 16.4005 11.8958C16.3512 11.8105 16.2856 11.7357 16.2074 11.6757C15.3811 11.0438 14.4545 10.5554 13.4662 10.2309C14.274 9.60983 14.8669 8.75123 15.1616 7.77579C15.4562 6.80034 15.4378 5.75709 15.109 4.79263C14.7801 3.82818 14.1573 2.99101 13.3281 2.39878C12.4989 1.80655 11.505 1.48904 10.486 1.49085C9.46701 1.49267 8.47422 1.81373 7.64713 2.40891C6.82004 3.00409 6.20023 3.84348 5.87481 4.8091C5.5494 5.77472 5.53473 6.81804 5.83288 7.79243C6.13102 8.76681 6.72699 9.62329 7.53702 10.2415C4.06398 11.4015 1.5 14.5058 1.5 18.0529C1.50654 18.473 1.59942 18.8872 1.77286 19.2699C1.9463 19.6525 2.19659 19.9954 2.50818 20.2773C4.21143 21.9194 7.62121 22.4943 10.504 22.4943C10.7659 22.4943 11.024 22.4899 11.2756 22.4804C11.3741 22.4769 11.4709 22.454 11.5604 22.4131C11.65 22.3722 11.7307 22.3141 11.7978 22.242C11.8649 22.1698 11.9171 22.0852 11.9515 21.9929C11.9859 21.9006 12.0018 21.8025 11.9982 21.704C11.9959 21.6052 11.9739 21.5078 11.9334 21.4176C11.8928 21.3275 11.8347 21.2463 11.7622 21.179C11.6898 21.1117 11.6047 21.0595 11.5118 21.0257C11.4189 20.9918 11.3202 20.9769 11.2215 20.9819ZM10.4945 3.00017C11.162 3.00017 11.8145 3.19811 12.3696 3.56896C12.9246 3.93981 13.3572 4.46691 13.6126 5.08361C13.8681 5.70031 13.9349 6.37891 13.8047 7.0336C13.6744 7.68828 13.353 8.28965 12.881 8.76165C12.409 9.23365 11.8076 9.55509 11.1529 9.68532C10.4983 9.81554 9.81965 9.74871 9.20295 9.49326C8.58625 9.23781 8.05915 8.80523 7.6883 8.25022C7.31745 7.6952 7.11951 7.04268 7.11951 6.37517C7.12049 5.48036 7.47638 4.62248 8.1091 3.98976C8.74183 3.35704 9.5997 3.00114 10.4945 3.00017Z" fill="var(--wxc-icon--participant-list--color)" fillOpacity="0.95" />
    </svg>
  );
}

ParticipantListIcon.propTypes = {
  size: PropTypes.number,
  className: PropTypes.string,
  style: PropTypes.shape(),
};

ParticipantListIcon.defaultProps = {
  size: 24,
  className: '',
  style: {},
};
