

pragma solidity ^0.4.21;


contract Interface {
    
    function totalSupply() public view returns (uint);

    function balanceOf(address tokenOwner) public view returns (uint balance);

    function allowance(address tokenOwner, address spender) public view returns (uint remaining);

    function transfer(address _to, uint256 _value) public;

    function transferFrom(address _from, address _to, uint256 _value) public;

    function approve(address _spender, uint256 _value) public;

    event Transfer(address indexed from, address indexed to, uint tokens);

    event Approval(address indexed tokenOwner, address indexed spender, uint tokens);
}
