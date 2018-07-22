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

function RadioImageControl( { label, className, selected, help, onChange, options = [] } ) {
  options = options.map( function ( option ) {
    return {
      value: option.value,
      label: (
        <span className="tomodomo-radio-image-control__option">
          <span className="tomodomo-radio-image-control__text">{ option.label }</span>
          <img className="tomodomo-radio-image-control__image" src={ option.preview } />
        </span>
      )
    };
  } );

  return ! isEmpty( options ) && (
    <RadioControl selected={ selected } label={ label } help={ help } onChange={ onChange } options={ options } className={ classnames( className, 'tomodomo-radio-image-control' ) } />
  );
}

export default RadioImageControl;
