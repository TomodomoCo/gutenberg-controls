/**
 * External dependencies
 */
import { isEmpty } from 'lodash';
import classnames from 'classnames';
import { RadioControl } from "@wordpress/components";

/**
 * Internal dependencies
 */
import './editor.scss';

function BlockDesignControl( { label, className, selected, help, onChange, options = [] } ) {
  options = options.map( function ( option ) {
    return {
      value: option.value,
      label: (
        <span className="components-block-design-control__option">
          <span className="components-block-design-control__text">{ option.label }</span>
          <img className="components-block-design-control__image" src={ option.preview } />
        </span>
      )
    };
  } );

  return ! isEmpty( options ) && (
    <RadioControl selected={ selected } label={ label } help={ help } onChange={ onChange } options={ options } className={ classnames( className, 'components-block-design-control' ) } />
  );
}

export default BlockDesignControl;
