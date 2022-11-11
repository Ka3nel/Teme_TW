function addTokens(input, tokens){
    if(typeof(input) != "string")
        throw 'Invalid input';
    if(input.length < 6)
        throw 'Input should have at least 6 characters';
    tokens.forEach(token => {
        if(typeof(token.tokenName) != "string")
            throw 'Invalid array format';
    });
    tokens.forEach(token => {
        input = input.replace("...", "${" + token.tokenName + "}");
    });
    return input;
}

const app = {
    addTokens: addTokens
}

module.exports = app;