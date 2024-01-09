import React from "react";
import './styles.scss'

interface LayoutFormsProps {
  children: React.ReactNode;
}

const LayoutForms: React.FC<LayoutFormsProps> = ({ children })=> {
  return (
    <div className="container-page-form">
      <div className="content-page">
        {children}
      </div>
    </div>
  )
}

export default LayoutForms