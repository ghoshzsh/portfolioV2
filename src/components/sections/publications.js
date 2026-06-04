import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import sr from '@utils/sr';
import { srConfig } from '@config';
import { FormattedIcon } from '@components/icons';
import styled from 'styled-components';
import { theme, mixins, media, Section, Heading } from '@styles';
const { colors, fontSizes, fonts } = theme;

const StyledContainer = styled(Section)`
  ${mixins.flexCenter};
  flex-direction: column;
  align-items: flex-start;
`;
const StyledGrid = styled.div`
  margin-top: 50px;
  width: 100%;

  .publications {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-gap: 15px;
    position: relative;
    ${media.desktop`grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));`};
  }
`;
const StyledPubInner = styled.div`
  ${mixins.boxShadow};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
  padding: 2rem 1.75rem;
  height: 100%;
  border-radius: ${theme.borderRadius};
  transition: ${theme.transition};
  background-color: ${colors.lightNavy};
`;
const StyledPub = styled.div`
  transition: ${theme.transition};
  cursor: default;
  &:hover,
  &:focus {
    outline: 0;
    ${StyledPubInner} {
      transform: translateY(-5px);
    }
  }
`;
const StyledPubHeader = styled.div`
  ${mixins.flexBetween};
  margin-bottom: 20px;
  width: 100%;
`;
const StyledIconBook = styled.div`
  color: ${colors.green};
  svg {
    width: 36px;
    height: 36px;
  }
`;
const StyledPubLinks = styled.div`
  margin-right: -10px;
  color: ${colors.lightSlate};
`;
const StyledIconLink = styled.a`
  position: relative;
  top: -10px;
  padding: 10px;
  svg {
    width: 20px;
    height: 20px;
  }
`;
const StyledTypeBadge = styled.span`
  font-family: ${fonts.SFMono};
  font-size: ${fontSizes.xs};
  color: ${colors.green};
  border: 1px solid ${colors.green};
  border-radius: 3px;
  padding: 2px 8px;
  margin-bottom: 12px;
  display: inline-block;
`;
const StyledPubTitle = styled.h5`
  margin: 0 0 8px;
  font-size: ${fontSizes.xxl};
  color: ${colors.lightestSlate};
  a {
    color: ${colors.lightestSlate};
    &:hover {
      color: ${colors.green};
    }
  }
`;
const StyledVenue = styled.p`
  font-family: ${fonts.SFMono};
  font-size: ${fontSizes.smish};
  color: ${colors.green};
  margin: 0 0 6px;
`;
const StyledAuthors = styled.p`
  font-size: ${fontSizes.sm};
  color: ${colors.lightSlate};
  margin: 0 0 12px;
  line-height: 1.5;

  strong {
    color: ${colors.lightestSlate};
  }
`;
const StyledDescription = styled.div`
  font-size: 15px;
  color: ${colors.lightSlate};
  flex-grow: 1;
  a {
    ${mixins.inlineLink};
  }
`;

const BookIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1"
    strokeLinecap="round"
    strokeLinejoin="round">
    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
  </svg>
);

const Publications = ({ data }) => {
  const revealTitle = useRef(null);
  const revealPubs = useRef([]);

  useEffect(() => {
    sr.reveal(revealTitle.current, srConfig());
    revealPubs.current.forEach((ref, i) => sr.reveal(ref, srConfig(i * 100)));
  }, []);

  const publications = data.filter(({ node }) => node);

  if (!publications.length) {
    return null;
  }

  return (
    <StyledContainer id="publications">
      <Heading ref={revealTitle}>Research &amp; Publications</Heading>

      <StyledGrid>
        <div className="publications">
          {publications.map(({ node }, i) => {
            const { frontmatter, html } = node;
            const { title, venue, year, authors, external, type } = frontmatter;

            return (
              <StyledPub
                key={i}
                ref={el => (revealPubs.current[i] = el)}
                tabIndex="0">
                <StyledPubInner>
                  <StyledPubHeader>
                    <StyledIconBook>
                      <BookIcon />
                    </StyledIconBook>
                    <StyledPubLinks>
                      {external && (
                        <StyledIconLink
                          href={external}
                          target="_blank"
                          rel="nofollow noopener noreferrer"
                          aria-label="External Link">
                          <FormattedIcon name="External" />
                        </StyledIconLink>
                      )}
                    </StyledPubLinks>
                  </StyledPubHeader>

                  {type && <StyledTypeBadge>{type}</StyledTypeBadge>}

                  <StyledPubTitle>
                    {external ? (
                      <a
                        href={external}
                        target="_blank"
                        rel="nofollow noopener noreferrer">
                        {title}
                      </a>
                    ) : (
                      title
                    )}
                  </StyledPubTitle>

                  {venue && (
                    <StyledVenue>
                      {venue}
                      {year && ` · ${year}`}
                    </StyledVenue>
                  )}

                  {authors && (
                    <StyledAuthors
                      dangerouslySetInnerHTML={{ __html: authors }}
                    />
                  )}

                  {html && (
                    <StyledDescription dangerouslySetInnerHTML={{ __html: html }} />
                  )}
                </StyledPubInner>
              </StyledPub>
            );
          })}
        </div>
      </StyledGrid>
    </StyledContainer>
  );
};

Publications.propTypes = {
  data: PropTypes.array.isRequired,
};

export default Publications;
