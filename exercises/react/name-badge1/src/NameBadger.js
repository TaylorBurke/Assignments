import React from 'react';

const NameBadger =( ) => {
    return (
 <form className="form" onSubmit={this.fillBadge}>
          <br/>
          <br/>
           <input type='text' name='firstName' value={this.state.firstName} onChange={this.handleChange} placeholder='First Name'/>
           <input type='text' name='lastName' value={this.state.lastName} onChange={this.handleChange} placeholder='Last Name'/>
           <input type='email' name='email' value={this.state.email} onChange={this.handleChange} placeholder='Email'/>
           <input type='text' name='phone' value={this.state.phone} onChange={this.handleChange} placeholder='Phone Number'/>
           <input type='text' name='placeOfBirth' value={this.state.placeOfBirth} onChange={this.handleChange} placeholder='Place Of Birth'/>
           <input type='text' name='favoritefood' value={this.state.favoritefood} onChange={this.handleChange} placeholder='Favorite Food'/>
           <input type='text' name="aboutYourself" value={this.state.aboutYourself} onChange={this.handleChange} placeholder='About Yourself'/>
           <button>Submit</button> 
        </form>
          <br/>
          <br/>
          <br/>
        <div>
          <p>{myBadges}</p>
        </div>
    )
}

export default NameBadger 


       