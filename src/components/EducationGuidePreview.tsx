import React from 'react';

// styles
import '../styles/components/EducationGuidePreview.css';

interface GuideProps {
  title: string;
  imageUrl: string;
  description: string;
}
interface Props {
  guide: GuideProps;
}

export default function EducationGuidePreview({ guide }: Props) {
  return (
    <div className="education-guide-preview-container">
      <div
        className="education-guide-preview-image"
        style={{
          backgroundImage: `url(${guide.imageUrl})`,
          backgroundPosition: 'center center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          borderTopLeftRadius: '10px',
          borderTopRightRadius: '10px',
        }}
      ></div>
      <div className="education-guide-preview-info">
        <p className="education-guide-preview-title">{guide.title}</p>
        <p className="education-guide-preview-description">
          {guide.description}
        </p>
      </div>
    </div>
  );
}
