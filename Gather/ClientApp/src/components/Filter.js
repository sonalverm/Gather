import * as React from 'react';

// Create component for button
class Button extends React.Component {
  render() {
    return (
        <button
            type={this.props.type || 'button'}
            value={this.props.value || null}
            class="btn btn-danger"
            onClick={this.props.onClick}
        >
          {this.props.text}
        </button>
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
        <div class="col-sm-10">
            <input
             id={this.props.htmlFor}
                    value={this.props.value || null}
                    onChange={this.props.onChange}
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
      return <option key={index} value={selectOption}>{selectOption}</option>
    });

    return (
      <fieldset class="form-group row">
        <div class="col-sm-10">
        <select
          class="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref"
          defaultValue=''
          id={this.props.htmlFor}
          name={this.props.name || null}
          value={this.props.value || null}
          onChange={this.props.onChange}
          required={this.props.required || null}
        >
          <option value='' disabled>{this.props.label}</option>

          {selectOptionsList}
        </select>
        </div>
      </fieldset>
    );
  }
};

// Create component for form
export class Filter extends React.Component {
    state = {
        filterEmail: '',
        filterCategory: null,
        filterType: null
    }

    updateFilterEmail = (event) => {
        this.setState({ filterEmail: event.target.value });
    }
    updateFilterCategory = (event) => {
        this.setState({ filterCategory: event.target.value });
    }
    updateFilterType = (event) => {
        this.setState({ filterType: event.target.value });
    }

    handleApplyFilter = () => {
        const { filterEmail, filterCategory, filterType } = this.state;
        this.props.filterApply({ email: filterEmail, category: filterCategory, type: filterType });
    }

    render() {
        return (
            <>
            <h6>Search By:</h6>  
            <Input
                hasLabel='true'
                htmlFor='emailInput'
                label='Email'
                type='email'
                placeholder='Email'
                name='filter_email'
                value={this.state.filterEmail}
                onChange={this.updateFilterEmail}
            />
            <Select
                hasLabel='true'
                htmlFor='select'
                label='Category'
                name='filter_category'
                value={this.state.filterCategory}
                onChange={(event) => this.updateFilterCategory(event)}
                options='Books, Blood Donation, Travel, Gadgets, Knowledge Sharing, Meetup, Collaborate, Other'
            />
            <Select
                hasLabel='true'
                htmlFor='select'
                label='Type'
                name='filter_type'
                value={this.state.filterType}
                onChange={(event) => this.updateFilterType(event)}
                options='Seek, Offer'
            />
        
            <Button
                type='submit'
                value='submit'
                    text='Apply'
                    onClick={this.handleApplyFilter}
                />
                </>
        )
    }
}
