const validate = (form) => {
    const regexName = /[\^$.¡*+?=¿%&!:|\\/()[\]{}1234567890¬"'#;-@¨]/
    const regexImage = /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)/
    let errors = {};

    if(form.image && !regexImage.test(form.image)){
        errors.image = "URL must be an image (.jpg, .png or .gif)"
    }

    if(!form.name){
        errors.name = "Please, complete this field";
      }
      
      if(regexName.test(form.name)){
        errors.name = "Name must contain only A - Z letters";
      }

      if(form.name.length > 25){
        errors.name = "The name is too long";
      }

      if(!form.hp){
        errors.hp = "Please, complete this field";
      }

      if(form.hp <= 0 || form.hp > 300){
        errors.hp = "HP value must be between 1 and 300";
      }

      if(!form.attack){
        errors.attack = "Please, complete this field";
      }

      if(form.attack <= 0 || form.attack > 200){
        errors.attack = "Attack value must be between 1 and 200";
      }

      if(!form.defense){
        errors.defense = "Please, complete this field";
      }

      if(form.defense <= 0 || form.defense > 200){
        errors.defense = "Defense value must be between 1 and 200";
      }

      if(form.types.length === 0){
        errors.types = "Select at least one type"
      }

      if(form.types.length > 3){
        errors.types = "There are too many types"
      }

      if(form.types.includes("19") && form.types.length > 1){
        errors.types = "Unknown type pokemons can only have one type"
      }

      return errors;
}

export { validate }