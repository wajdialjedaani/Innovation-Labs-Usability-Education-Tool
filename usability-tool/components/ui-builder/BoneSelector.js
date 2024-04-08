// BoneSelector.js - A dynamic component for rendering certain bones.
// should allow for modular selection by the dragging components.

import styles from "@/styles/UIBones.module.scss"

// bone imports
import SearchBar from "./bones/SearchBar";
import NavBar from "./bones/NavBar";
import LogoBox from "./bones/LogoBox";
import PostContent from "./bones/PostContent";

import PlaybackControls from "@/components/ui-builder/bones/Heuristic1/PlaybackControls";
import VolumeControls from "@/components/ui-builder/bones/Heuristic1/VolumeControls";
import NowPlaying from "@/components/ui-builder/bones/Heuristic1/NowPlaying";
import PlaybackSlider from "@/components/ui-builder/bones/Heuristic1/PlaybackSlider";
import TopBar from "@/components/ui-builder/bones/Heuristic1/TopBar";
import AlbumBox from "./bones/Heuristic1/AlbumBox";
import PlaybackBump from "./bones/Heuristic1/PlaybackBump";

import Heuristic2Static from "./bones/Heuristic2/static/Static";
import Move from "./bones/Heuristic2/Move";
import Select from "./bones/Heuristic2/Select";
import Zoom from "./bones/Heuristic2/Zoom";
import Copy from "./bones/Heuristic2/Copy";
import Paste from "./bones/Heuristic2/Paste";
import Draw from "./bones/Heuristic2/Draw";
import Erase from "./bones/Heuristic2/Erase";
import Text from "./bones/Heuristic2/Text";
import Shape from "./bones/Heuristic2/Shape";
import SelectColor from "./bones/Heuristic2/SelectColor";
import Home from "./bones/Heuristic2/Home";
import Gradient from "./bones/Heuristic2/Gradient";
import ThumbtackIcon from "./bones/Heuristic2/Thumbtack";
import Slantline from "./bones/Heuristic2/Slantline";
import TagIcon from "./bones/Heuristic2/Tag";
import MagicWand from "./bones/Heuristic2/MagicWand";

// wow i did it better here haha
import { CartButton, ShoesQuickButton, SuitsQuickButton, HatQuickButton, BannerAd, SuitsDropdown, ShoesDropdown, HatsDropdown, AtomicLogo, HeuristicThreeStaticTopBar, HeuristicThreeStaticBody } from "@/components/ui-builder/bones/Heuristic3";
import { HeuristicFourStaticBody, LogOutEverywhereWarning, DeleteAccountWarning, LogOutEverywhereButton, DeleteAccountButton, ChangeUsernameButton, ChangePasswordButton, NewPasswordInputHeader, ConfirmNewPasswordInputHeader, CurrentPasswordInputHeader, SecuritySubHeader, PasswordSubHeader, InputBox, AccountSettingsHeader, UsernameSubHeader } from "@/components/ui-builder/bones/Heuristic4"
import { TransferButton, CancelButton, AmountInputBox, AmountSubheader, AccountTransferDropdownTwo, AccountTransferDropdownOne, TransferToSubHeader, TransferFromSubHeader, AccountTransferHeader, TopBarGreeting, TransfersDropdown, SettingsDropdown, AccountsDropdown, NeutronLogo, HeuristicThreeTwoStaticTopBar, HeuristicThreeTwoStaticBody } from "@/components/ui-builder/bones/Heuristic3-2"
import { SizeFilters, ColorFilters, TypeFilters, TheBaseballer, TheSnapback, TheChickenHat, FilterBar, TheRedditor, TheCowboy, TheEugene } from "@/components/ui-builder/bones/heuristic6";
import { Heuristic7Static, ColorSelector, QuickToolsPanel, QuickToolsOptions, LayerPanel, } from "./bones/Heuristic7";
import { DocumentCanvas, TextDecorationModule, FontSizeModule, FontModule, UndoRedoModule, FormatBar, SaveButton, TitleBar, TitleBarGreeting, DocumentTitle, ListModule, AttachmentModule } from "@/components/ui-builder/bones/Heuristic8";
import { MissingPageErrorReporting, AlertIcon, ErrorLabel, InbodySearchBar } from "@/components/ui-builder/bones/Heuristic9";
import { FeedbackRequest, ChatBox, OrderSummary, ShiptoSubheader, OrderSummaryHeader, BillToSubheader, BillingInfo, ShippingAddress, ShippingEstimate } from "@/components/ui-builder/bones/Heuristic10";

export default function BoneSelector({ type, drawerMode }) {

  let BoneComponent;

  switch (type) {
    case "SearchBar":
      BoneComponent = <SearchBar />
      break;
    case "navbar":
      BoneComponent = <NavBar />
      break;
    case "logobox":
      BoneComponent = <LogoBox />
      break;
    case "postcontent":
      BoneComponent = <PostContent />
      break;

    // heuristic 1 bones ////////////////////////////////////////////////////////////
    case "PlaybackControls":
      BoneComponent = <PlaybackControls />
      break;
    case "VolumeControls":
      BoneComponent = <VolumeControls />
      break;
    case "NowPlaying":
      BoneComponent = <NowPlaying />
      break;
    case "PlaybackSlider":
      BoneComponent = <PlaybackSlider />
      break;
    case "TopBar":
      BoneComponent = <TopBar />
      break;
    case "AlbumBox":
      BoneComponent = <AlbumBox />
      break;
    case "PlaybackBump":
      BoneComponent = <PlaybackBump />
      break;

    // heuristic 2 bones //////////////////////////////////////////////
    case "HeuristicTwoStatic":
      BoneComponent = <Heuristic2Static />
      break;
    case "MoveIcon":
      BoneComponent = <Move />
      break;
    case "SelectIcon":
      BoneComponent = <Select />
      break;
    case "ZoomIcon":
      BoneComponent = <Zoom />
      break;
    case "CopyIcon":
      BoneComponent = <Copy />
      break;
    case "PasteIcon":
      BoneComponent = <Paste />
      break;
    case "DrawIcon":
      BoneComponent = <Draw />
      break;
    case "EraseIcon":
      BoneComponent = <Erase />
      break;
    case "AddTextIcon":
      BoneComponent = <Text />
      break;
    case "AddShapeIcon":
      BoneComponent = <Shape />
      break;
    case "SelectColorIcon":
      BoneComponent = <SelectColor />
      break;
    case "HomeIcon":
      BoneComponent = <Home />
      break;
    case "GradientIcon":
      BoneComponent = <Gradient />
      break;
    case "ThumbtackIcon":
      BoneComponent = <ThumbtackIcon />
      break;
    case "Slantline":
      BoneComponent = <Slantline />
      break;
    case "Tag":
      BoneComponent = <TagIcon />
      break;
    case "MagicWand":
      BoneComponent = <MagicWand />
      break;

    // heuristic 4 bones
    case "AtomicLogo":
      BoneComponent = <AtomicLogo />
      break;
    case "HeuristicThreeStaticTopBar":
      BoneComponent = <HeuristicThreeStaticTopBar />
      break;
    case "HeuristicThreeStaticBody":
      BoneComponent = <HeuristicThreeStaticBody />
      break;
    case "HatsDropdown":
      BoneComponent = <HatsDropdown />
      break;
    case "SuitsDropdown":
      BoneComponent = <SuitsDropdown />
      break;
    case "ShoesDropdown":
      BoneComponent = <ShoesDropdown />
      break;
    case "BannerAd":
      BoneComponent = <BannerAd />
      break;
    case "HatQuickButton":
      BoneComponent = <HatQuickButton />
      break;
    case "SuitsQuickButton":
      BoneComponent = <SuitsQuickButton />
      break;
    case "ShoesQuickButton":
      BoneComponent = <ShoesQuickButton />
      break;
    case "CartButton":
      BoneComponent = <CartButton />
      break;

    // heuristic 5 bonez
    case "AccountSettingsHeader":
      BoneComponent = <AccountSettingsHeader />
      break;
    case "InputBox":
      BoneComponent = <InputBox />
      break;
    case "UsernameSubHeader":
      BoneComponent = <UsernameSubHeader />
      break;
    case "PasswordSubHeader":
      BoneComponent = <PasswordSubHeader />
      break;
    case "SecuritySubHeader":
      BoneComponent = <SecuritySubHeader />
      break;
    case "CurrentPasswordInputHeader":
      BoneComponent = <CurrentPasswordInputHeader />
      break;
    case "NewPasswordInputHeader":
      BoneComponent = <NewPasswordInputHeader />
      break;
    case "ConfirmNewPasswordInputHeader":
      BoneComponent = <ConfirmNewPasswordInputHeader />
      break;
    case "ChangeUsernameButton":
      BoneComponent = <ChangeUsernameButton />
      break;
    case "ChangePasswordButton":
      BoneComponent = <ChangePasswordButton />
      break;
    case "LogOutEverywhereButton":
      BoneComponent = <LogOutEverywhereButton />
      break;
    case "DeleteAccountButton":
      BoneComponent = <DeleteAccountButton />
      break;
    case "DeleteAccountWarning":
      BoneComponent = <DeleteAccountWarning />
      break;
    case "LogOutEverywhereWarning":
      BoneComponent = <LogOutEverywhereWarning />
      break;
    case "HeuristicFourStaticBody":
      BoneComponent = <HeuristicFourStaticBody />
      break;

    // heuristic 3 

    case "HeuristicThreeTwoStaticTopBar":
      BoneComponent = <HeuristicThreeTwoStaticTopBar />
      break;
    case "HeuristicThreeTwoStaticBody":
      BoneComponent = <HeuristicThreeTwoStaticBody />
      break;
    case "NeutronLogo":
      BoneComponent = <NeutronLogo />
      break;
    case "AccountsDropdown":
      BoneComponent = <AccountsDropdown />
      break;
    case "TransfersDropdown":
      BoneComponent = <TransfersDropdown />
      break;
    case "SettingsDropdown":
      BoneComponent = <SettingsDropdown />
      break;
    case "TopBarGreeting":
      BoneComponent = <TopBarGreeting />
      break;
    case "AccountTransferHeader":
      BoneComponent = <AccountTransferHeader />
      break;
    case "TransferFromSubHeader":
      BoneComponent = <TransferFromSubHeader />
      break;
    case "TransferToSubHeader":
      BoneComponent = <TransferToSubHeader />
      break;
    case "AccountTransferDropdownOne":
      BoneComponent = <AccountTransferDropdownOne />
      break;
    case "AccountTransferDropdownTwo":
      BoneComponent = <AccountTransferDropdownTwo />
      break;
    case "AmountSubheader":
      BoneComponent = <AmountSubheader />
      break;
    case "AmountInputBox":
      BoneComponent = <AmountInputBox />
      break;
    case "CancelButton":
      BoneComponent = <CancelButton />
      break;
    case "TransferButton":
      BoneComponent = <TransferButton />
      break;

    case "FilterBar":
      BoneComponent = <FilterBar />
      break;
    case "TheRedditor":
      BoneComponent = <TheRedditor />
      break;
    case "TheCowboy":
      BoneComponent = <TheCowboy />
      break;
    case "TheEugene":
      BoneComponent = <TheEugene />
      break;
    case "TheChickenHat":
      BoneComponent = <TheChickenHat />
      break;
    case "TheSnapback":
      BoneComponent = <TheSnapback />
      break;
    case "TheBaseballer":
      BoneComponent = <TheBaseballer />
      break;
    case "ColorFilters":
      BoneComponent = <ColorFilters />
      break;
    case "TypeFilters":
      BoneComponent = <TypeFilters />
      break;
    case "SizeFilters":
      BoneComponent = <SizeFilters />
      break;

    case "Heuristic7Static":
      BoneComponent = <Heuristic7Static />
      break;
    case "ColorSelector":
      BoneComponent = <ColorSelector />
      break;
    case "QuickToolsPanel":
      BoneComponent = <QuickToolsPanel />
      break;
    case "QuickToolsOptions":
      BoneComponent = <QuickToolsOptions />
      break;
    case "LayerPanel":
      BoneComponent = <LayerPanel />
      break;

    case "TitleBar":
      BoneComponent = <TitleBar />
      break;
    case "TitleBarGreeting":
      BoneComponent = <TitleBarGreeting />
      break;
    case "DocumentTitle":
      BoneComponent = <DocumentTitle />
      break;
    case "SaveButton":
      BoneComponent = <SaveButton />
      break;
    case "FormatBar":
      BoneComponent = <FormatBar />
      break;
    case "UndoRedoModule":
      BoneComponent = <UndoRedoModule />
      break;
    case "FontModule":
      BoneComponent = <FontModule />
      break;
    case "FontSizeModule":
      BoneComponent = <FontSizeModule />
      break;
    case "TextDecorationModule":
      BoneComponent = <TextDecorationModule />
      break;
    case "ListModule":
      BoneComponent = <ListModule />
      break;
    case "AttachmentModule":
      BoneComponent = <AttachmentModule />
      break;
    case "DocumentCanvas":
      BoneComponent = <DocumentCanvas />
      break;

    case "AlertIcon":
      BoneComponent = <AlertIcon />
      break;
    case "ErrorLabel":
      BoneComponent = <ErrorLabel />
      break;
    case "InbodySearchBar":
      BoneComponent = <InbodySearchBar />
      break;
    case "MissingPageErrorReporting":
      BoneComponent = <MissingPageErrorReporting />
      break;

    case "OrderSummaryHeader":
      BoneComponent = <OrderSummaryHeader />
      break;
    case "ShiptoSubheader":
      BoneComponent = <ShiptoSubheader />
      break;
    case "BillToSubheader":
      BoneComponent = <BillToSubheader />
      break;
    case "BillingInfo":
      BoneComponent = <BillingInfo />
      break;
    case "ShippingAddress":
      BoneComponent = <ShippingAddress />
      break;
    case "ShippingEstimate":
      BoneComponent = <ShippingEstimate />
      break;
    case "OrderSummary":
      BoneComponent = <OrderSummary />
      break;
    case "ChatBox":
      BoneComponent = <ChatBox />
      break;
    case "FeedbackRequest":
      BoneComponent = <FeedbackRequest />
      break;

    default:
      BoneComponent = null;
  }

  if (drawerMode) {
    return (
      <div className={styles.thumbnailWrapper}>
        {BoneComponent}
      </div>
    )
  }

  return BoneComponent
}