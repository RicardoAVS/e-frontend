import React from 'react';

import MenuItem from '../menu-item/menu-item.component';

import './directory.styles.scss'

class Directory extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
        sections:  [
        {
          id: 1,
          title: 'hats',
          imgUrl: 'https://format-com-cld-res.cloudinary.com/image/private/s--rKPcRmT5--/c_limit,g_center,h_300,w_65535/fl_keep_iptc.progressive,q_95/v1/4f109a87e692be9efad6ee52eb5bf8c1/il_1588xN_1934328117_8lfw.jpg',
          linkUrl: 'hats'
        },
        {
          id: 2,
          title: 'jackets',
          imgUrl: 'https://blog.drupa.com/wp-content/uploads/2018/05/artificial-photography-119298-unsplash-400x300.jpg',
          linkUrl: 'hats'
        },
        {
          id: 3,
          title: 'sneaker',
          imgUrl: 'https://preview.thenewsmarket.com/Previews/BASF/StillAssets/400x300/567332.jpg',
          linkUrl: 'hats'
        },
        {
          id: 4,
          title: 'womens',
          imgUrl: 'http://www.somamagazine.com/site/wp-content/uploads/Mike-3-590x382.jpg',
          size: 'large',
          linkUrl: 'hats'
        },
        {
          id: 5,
          title: 'mens',
          imgUrl: 'https://cdn.shopify.com/s/files/1/0214/7974/products/thumbnail_21_grande.jpeg?v=1571439846',
          size: 'large',
          linkUrl: 'hats'
        }
      ]
    };
  }

  render() {
    return (
      <div className="directory-menu">
      {
        this.state.sections.map(({id, ...otherSectionProps}) => ( 
          <MenuItem 
            key={id} 
            {...otherSectionProps}
          /> 
        ))
      }
      </div> 
    );
  }
}

export default Directory;
