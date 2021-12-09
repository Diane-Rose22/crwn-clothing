import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from "reselect";

import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import {selectCartHidden} from "../../redux/cart/cart.selectors";
import {selectCurrentUser} from "../../redux/user/user.selector";

import './header.styles.scss';
import {ReactComponent as Logo} from '../../assets/crown.svg';
import {HeaderContainer, LogoContainer, OptionsContainer, OptionLink} from "./header.styles";
import {signOutStart} from "../../redux/user/user.actions";


const Header = ({currentUser, hidden, dispatchSignOutStart}) => (
    <HeaderContainer>
        <LogoContainer to={"/"}>
            <Logo className={'logo'}> </Logo>
        </LogoContainer>
        <OptionsContainer>
            <OptionLink to={'/shop'}>SHOP</OptionLink>
            <OptionLink to={'/shop'}>CONTACT</OptionLink>
            {currentUser ?
                (<OptionLink as={'div'} onClick={dispatchSignOutStart}>SIGN OUT</OptionLink>)
                :
                (<OptionLink className={'option'} to={'/signin'}>SIGN IN</OptionLink>)
            }
            <CartIcon />
        </OptionsContainer>
        {hidden ? null : <CartDropdown />}
    </HeaderContainer>
)

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden,
})

const mapDispatchToProps = dispatch => ({
    dispatchSignOutStart: () => dispatch(signOutStart()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);