import React from 'react';
import PropTypes from 'prop-types';

import IconBookmark from './bookmark';
import IconFolder from './folder';
import IconFork from './fork';
import IconGitHub from './github';
import IconInstagram from './instagram';
import IconLinkedin from './linkedin';
import IconLoader from './loader';
import IconLogo from './logo';
import IconStar from './star';
import IconTwitter from './twitter';
import IconExternal from './external';
import IconYouTube from './youtube';
import IconPython from './python';
import IconCPlusPlus from './cpp';
import IconJavaScript from './javascript';
import IconJava from './java';
import IconPandas from './pandas';
import IconNumpy from './numpy';
import IconMatplotlib from './matplotlib';
import IconSklearn from './sklearn';
import IconPostgreSQL from './postgresql';
import IconJupyter from './jupyter';
import IconLinux from './linux';
import IconPrefect from './prefect';
import IconDjango from './django';
import IconHtmx from './htmx';
import IconNode from './node';
import IconHTML from './html';
import IconCSS from './css';
import IconGit from './git';
import IconCV from './cv';
import IconEmail  from './email';
import IconPhone from './phone';
import IconSQL from './sql';
import IconTableau from './tableau';
import IconShap from './shap';
import IconOptuna from './optuna';
import IconPyTorch from './pytorch';
import IconTensorFlow from './tensorflow';
import IconNetworkX from './networkx';
import IconSpark from './spark';
import IconAWS from './aws';

const Icon = ({ name }) => {
  switch (name) {
    case 'AWS':
      return <IconAWS />;
    case 'Apache Spark':
      return <IconSpark />;
    case 'NetworkX':
      return <IconNetworkX />;
    case 'TensorFlow':
      return <IconTensorFlow />;
    case 'PyTorch':
      return <IconPyTorch />;
    case 'Optuna':
      return <IconOptuna />;
    case 'SHAP  ':
      return <IconShap />;
    case 'Tableau':
      return <IconTableau />;
    case 'SQL':
      return <IconSQL />;
    case 'Bookmark':
      return <IconBookmark />;
    case 'External':
      return <IconExternal />;
    case 'Folder':
      return <IconFolder />;
    case 'Fork':
      return <IconFork />;
    case 'GitHub':
      return <IconGitHub />;
    case 'Instagram':
      return <IconInstagram />;
    case 'Linkedin':
      return <IconLinkedin />;
    case 'Loader':
      return <IconLoader />;
    case 'Logo':
      return <IconLogo />;
    case 'Star':
      return <IconStar />;
    case 'Twitter':
      return <IconTwitter />;
    case 'YouTube':
        return <IconYouTube />;
    case 'Python':
        return <IconPython />;
    case 'C++':
        return <IconCPlusPlus/>;
    case 'JavaScript':
        return <IconJavaScript/>;
    case 'Java':
        return <IconJava/>;
    case 'Pandas':
        return <IconPandas/>;
    case 'Numpy':
        return <IconNumpy/>;
    case 'Matplotlib':
        return <IconMatplotlib/>;
    case 'Scikit-Learn':
        return <IconSklearn/>;
    case 'PostgreSQL':
        return <IconPostgreSQL/>;
    case 'Jupyter':
        return <IconJupyter/>;
    case 'Linux':
        return <IconLinux/>;
    case 'Prefect':
        return <IconPrefect/>;
    case 'Django':
        return <IconDjango/>;
    case 'HTMX':
        return <IconHtmx/>;
    case 'Node':
        return <IconNode/>;
    case 'HTML':
        return <IconHTML/>;
    case 'CSS':
        return <IconCSS/>;  
    case 'Git':
        return <IconGit/>;
    case 'CV':
        return <IconCV />;
    case 'Email':
        return <IconEmail />;
    case 'Phone':
        return <IconPhone />;
      
    default:
      return <IconExternal />;
  }
};

Icon.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Icon;
