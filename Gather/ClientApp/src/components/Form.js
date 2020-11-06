import * as React from 'react';

// Create component for button
class Button extends React.Component {
  render() {
    return (
      <fieldset class="form-group row">
        <button
          type={this.props.type || 'button'}
          value={this.props.value || null}
          class="btn btn-danger"
        >
          {this.props.text}
        </button>
      </fieldset>
    );
  }
};

// Create component for checkbox input
class Checkbox extends React.Component {
  render() {
    return (
      <fieldset class="form-group row">
        <label
          htmlFor={this.props.htmlFor}
          label={this.props.label}
        >
          <input
            id={this.props.htmlFor}
            name={this.props.name || null}
            required={this.props.required || null}
            type='checkbox'
          />
          {this.props.label}
        </label>
      </fieldset>
    );
  }
}

// Create component for label
class Label extends React.Component {
  render() {
    if (this.props.hasLabel === 'true') {
      return <label htmlFor={this.props.htmlFor} class="col-sm-2 col-form-label">{this.props.label}</label>
    }
  }
}

// Create component for input
class Input extends React.Component {
  render() {
    return (
      <div class="form-group row">
        <Label
          hasLabel={this.props.hasLabel}
          htmlFor={this.props.htmlFor}
          label={this.props.label}
        />
        <div class="col-sm-10">
            <input
            id={this.props.htmlFor}
            max={this.props.max || null}
            min={this.props.min || null}
            name={this.props.name || null}
            placeholder={this.props.placeholder || null}
            required={this.props.required || null}
            step={this.props.step || null}
            type={this.props.type || 'text'}
            class="form-control"
            />
        </div>
      </div>
    );
  }
}

// Create component for radio input
class Radio extends React.Component {
  render() {
    return (
      <fieldset class="form-group">
        <div class="row">
        <Label
          hasLabel={this.props.hasLabel}
          htmlFor={this.props.htmlFor}
          label={this.props.label}
        />
        <div class="col-sm-10">
        <div class="form-check">
          <input
            id={this.props.htmlFor}
            name={this.props.name || null}
            required={this.props.required || null}
            type='radio'
          />
          {this.props.radiolabel1}
        </div>
        <div class="form-check">
          <input
            id={this.props.htmlFor}
            name={this.props.name || null}
            required={this.props.required || null}
            type='radio'
          />
          {this.props.radiolabel2}
        </div>
        </div>
        </div>
      </fieldset>
    );
  }
}

// Create component for select input
class Select extends React.Component {
  render() {
    // Get all options from option prop
    const selectOptions = this.props.options.split(', ');

    // Generate list of options
    const selectOptionsList = selectOptions.map((selectOption, index) => {
      return <option key={index} value={index}>{selectOption}</option>
    });

    return (
      <fieldset class="form-group row">
        <Label
          hasLabel={this.props.hasLabel}
          htmlFor={this.props.htmlFor}
          label={this.props.label}
        />
        <div class="col-sm-10">
        <select
          class="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref"
          defaultValue=''
          id={this.props.htmlFor}
          name={this.props.name || null}
          required={this.props.required || null}
        >
          <option value='' disabled>Select one option</option>

          {selectOptionsList}
        </select>
        </div>
      </fieldset>
    );
  }
};

// Create component for textarea
class Textarea extends React.Component {
  render() {
    return (
      <div class="form-group row">
        <Label
          hasLabel={this.props.hasLabel}
          htmlFor={this.props.htmlFor}
          label={this.props.label}
        />
        <div class="col-sm-10">
        <textarea
          class="form-control"
          cols={this.props.cols || null}
          id={this.props.htmlFor}
          name={this.props.name || null}
          required={this.props.required || null}
          rows={this.props.rows || null}
        >
        </textarea>
        </div>
      </div>
    );
  }
};

// Create component for form
export class Form extends React.Component {
  
  render() {
    return (
      <form method='' action=''>
        <Input
            hasLabel='true'
            htmlFor='textInput'
            label='Name'
            required='true'
            type='text'
        />
        
        <Input
          hasLabel='true'
          htmlFor='emailInput'
          label='Email'
          required='true'
          type='email'
        />
        
        {/* <Input
          hasLabel='true'
          htmlFor='numberInput'
          label='Number input'
          required='true'
          type='number'
          min='0.5'
          max='100'
          step='0.5'
        /> */}
        
        {/* <Input
          hasLabel='true'
          htmlFor='passwordInput'
          label='Password input'
          required='true'
          type='password'
        /> */}
        
        <Select
          hasLabel='true'
          htmlFor='select'
          label='Category'
          options='Travel, Knowledge Sharing, Books, Gadgets, Meetup'
          required='true'
        />
        
        <Textarea
          hasLabel='true'
          htmlFor='textarea'
          label='Description'
          required='true'
        />

        <Radio
          hasLabel='true'
          htmlFor='radioOne'
          label='Type'
          radiolabel1=' Need help!!'
          radiolabel2=' Offering help :)'
          name='radios'
          required='true'
        />
        
        <Checkbox
          hasLabel='true'
          htmlFor='checkbox'
          label='  I hearby agree that all the information provided here is correct and I would produce relevant documents for proof as and when required.'
          required='true'
        />
        
        <Button
          type='submit'
          value='submit'
          text='Post'
        />
      </form>
    )
  }
}
