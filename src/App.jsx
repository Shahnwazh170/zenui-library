import React, {useState, useEffect, Suspense} from "react";

// react router dom
import {Route, Routes} from "react-router-dom";

// home page
const HomePage = React.lazy(() => import("./Pages/HomePage"));

// components page
const ComponentsPage = React.lazy(() => import("./Pages/ComponentsPage"));

// documentation page
const OverviewPage = React.lazy(() => import("./Pages/OverviewPage"));
const FaqPage = React.lazy(() => import("./Pages/FaqPage"));
const TempletePage = React.lazy(() => import("./Pages/TempletePage"));

// inputs
const InputTextPage = React.lazy(() => import("./Pages/Components/Inputs/InputTextPage"));
const InputTextareaPage = React.lazy(() => import("./Pages/Components/Inputs/InputTextareaPage"));
const InputRadioPage = React.lazy(() => import("./Pages/Components/Inputs/InputRadioPage"));
const InputSwitchPage = React.lazy(() => import("./Pages/Components/Inputs/InputSwitchPage"));
const InputSelectPage = React.lazy(() => import("./Pages/Components/Inputs/InputSelectPage"));
const InputFilePage = React.lazy(() => import("./Pages/Components/Inputs/InputFilePage"));

// buttons pages
const NormalPage = React.lazy(() => import("./Pages/Components/Buttons/NormalPage"));
const AnimatedButtonPage = React.lazy(() => import("./Pages/Components/Buttons/AnimatedButtonPage"));

// all components
const AllComponentsPage = React.lazy(() => import("./Pages/Components/AllComponentsPage"));

// navigation pages
const PaginationPage = React.lazy(() => import("./Pages/Components/Navigation/PaginationPage"));
const TabsPage = React.lazy(() => import("./Pages/Components/Navigation/TabsPage"));
const ModalPage = React.lazy(() => import("./Pages/Components/Navigation/ModalPage"));
const ChipPage = React.lazy(() => import("./Pages/Components/Navigation/ChipPage"));

// feedback pages
const SkeletonPage = React.lazy(() => import("./Pages/Components/Feedback/SkeletonPage"));
const AlertMessagePage = React.lazy(() => import("./Pages/Components/Feedback/AlertMessagePage"));
const DialogPage = React.lazy(() => import("./Pages/Components/Feedback/DialogPage"));
const TestimonialPage = React.lazy(() => import("./Pages/Components/Feedback/TestimonialPage"));
const NotificationPage = React.lazy(() => import("./Pages/Components/Feedback/NotificationPage"));
const LoaderPage = React.lazy(() => import("./Pages/Components/Feedback/LoaderPage"));

// data display
const BadgePage = React.lazy(() => import("./Pages/Components/Data Display/BadgePage"));
const TooltipPage = React.lazy(() => import("./Pages/Components/Data Display/TooltipPage"));

// surface pages
const CardPage = React.lazy(() => import("./Pages/Components/Surfaces/CardPage"));
const AnimatedCardsPage = React.lazy(() => import("./Pages/Components/Surfaces/AnimatedCardsPage.jsx"));
const ImageGalleryPage = React.lazy(() => import("./Pages/Components/Surfaces/ImageGalleryPage"));
const AccordingPage = React.lazy(() => import("./Pages/Components/Surfaces/AccordingPage"));
const AppbarPage = React.lazy(() => import("./Pages/Components/Surfaces/AppbarPage"));

// randoms
const CodeSnippetPage = React.lazy(() => import("./Pages/Components/Randoms/CodeSnippetPage"));
const SnippetPage = React.lazy(() => import("./Pages/Components/Randoms/SnippetPage"));
const AboutUsPage = React.lazy(() => import("./Pages/AboutUsPage.jsx"));
const PrivacyPolicyPage = React.lazy(() => import("./Pages/PrivacyPolicyPage.jsx"));
const CookieModal = React.lazy(() => import("./Shared/CookieModal.jsx"));
const DropdownButtonPage = React.lazy(() => import("./Pages/Components/Buttons/DropdownButtonPage.jsx"));
const ResizableLayoutPage = React.lazy(() => import("./Pages/Components/Surfaces/ResizableLayoutPage.jsx"));
const OtpInputPage = React.lazy(() => import("./Pages/Components/Inputs/OtpInputPage.jsx"));

// blocks
const ResponsiveNavbarPage = React.lazy(() => import("./Pages/Blocks/Sections/ResponsiveNavbarPage.jsx"));
const AllBlocksPage = React.lazy(() => import("./Pages/Blocks/AllBlocksPage.jsx"));
const HeroSectionPage = React.lazy(() => import("./Pages/Blocks/Sections/HeroSectionPage.jsx"));
const ProgressBarPage = React.lazy(() => import("./Pages/Components/Navigation/ProgressBarPage.jsx"));
const ContactFormPage = React.lazy(() => import("./Pages/Blocks/Forms/ContactFormPage.jsx"));
const ResponsiveSearchbarPage = React.lazy(() => import("./Pages/Blocks/Randoms/ResponsiveSearchbarPage.jsx"));
const BreadcrumbPage = React.lazy(() => import("./Pages/Components/Navigation/BreadcrumbPage.jsx"));
const RatingPage = React.lazy(() => import("./Pages/Components/Navigation/RatingPage.jsx"));
const TimelinePage = React.lazy(() => import("./Pages/Components/Data Display/TimelinePage.jsx"));
const NumberInputPage = React.lazy(() => import("./Pages/Components/Inputs/NumberInputPage.jsx"));
const StrongPasswordPage = React.lazy(() => import("./Pages/Components/Inputs/StrongPasswordPage.jsx"));
const CheckboxInputPage = React.lazy(() => import("./Pages/Components/Inputs/CheckboxInputPage.jsx"));
const EmptyPage = React.lazy(() => import("./Pages/EmptyPage.jsx"))
const StepsPage = React.lazy(() => import("./Pages/Components/Navigation/StepsPage.jsx"));

// icons page
const IconsPage = React.lazy(() => import('./Pages/IconsPages/IconsPage.jsx'))
const ResponsiveFooterPage = React.lazy(() => import("./Pages/Blocks/Randoms/ResponsiveFooterPage.jsx"));
const AuthButtonPage = React.lazy(() => import("./Pages/Components/Buttons/AuthButtonPage.jsx"));

const OpacityPalettePage = React.lazy(() => import("./Pages/OpacityPalettePage.jsx"))
const WrongUrlErrorPage = React.lazy(() => import("./Pages/Blocks/EmptyPages/WrongRoutePage.jsx"));
const WrongRoutePage = React.lazy(() => import("./Pages/Blocks/EmptyPages/EmptyPage.jsx"));
const PricingSectionPage = React.lazy(() => import("./Pages/Blocks/Sections/PricingSectionPage.jsx"));
const NewsletterSectionPage = React.lazy(() => import("./Pages/Blocks/Forms/NewsletterSectionPage.jsx"));
const MultipageFormPage = React.lazy(() => import("./Pages/Blocks/Forms/MultipageFormPage.jsx"));
const ResponsiveSidebarPage = React.lazy(() => import("./Pages/Blocks/Randoms/ResponsiveSidebarPage.jsx"));
const InputSliderPage = React.lazy(() => import("./Pages/Components/Inputs/InputSliderPage.jsx"));

// layout playground page
const LayoutPlaygroundPage = React.lazy(() => import("./Pages/LayoutPlaygroundPage.jsx"));
const TreeDropdownPage = React.lazy(() => import("./Pages/Components/Feedback/TreeDropdownPage.jsx"));
const InstallationPage = React.lazy(() => import("./Pages/InstallationPage.jsx"));
const DragAndDropPage = React.lazy(() => import("./Pages/Components/Surfaces/DragAndDropPage.jsx"));
const ResourcesPage = React.lazy(() => import("./Pages/ResourcesPage.jsx"));
const ContextMenuPage = React.lazy(() => import("./Pages/Components/Feedback/ContextMenuPage.jsx"));
const ReactCustomHooksPage = React.lazy(() => import("./Pages/ReactCustomHooksPage.jsx"));
const TablePage = React.lazy(() => import("./Pages/Components/Data Display/TablePage.jsx"));
const PieChartPage = React.lazy(() => import("./Pages/Components/Data Display/PieChartPage.jsx"));
const CarouselPage = React.lazy(() => import("./Pages/Components/Surfaces/CarouselPage.jsx"));

// become zenui hero docs
const ZenUIHeroDocsPage = React.lazy(() => import("./Pages/ZenUIHeroDocsPage.jsx"));
const TimerPage = React.lazy(() => import("./Pages/Components/Navigation/TimerPage.jsx"));
const ShortcutGeneratorPage = React.lazy(() => import("./Pages/ShortcutGeneratorPage.jsx"));


const App = () => {
    const [isCookie, setIsCookie] = useState(false)
    const [cursorPosition, setCursorPosition] = useState({x: 0, y: 0});
    const [isMemeVisible, setIsMemeVisible] = useState(false)

    let Title = document.title;
    window.addEventListener('blur', () => {
        document.title = 'Get more components 😍';
    })

    window.addEventListener('focus', () => {
        document.title = Title;
    })
    //
    // useEffect(() => {
    //     const handleRightClick = (event) => {
    //         event.preventDefault();
    //         setIsMemeVisible(true);
    //         const audio = new Audio('/rightclickmeme.mp3');
    //         audio.play();
    //         setTimeout(() => {
    //             setIsMemeVisible(false);
    //         }, 3500);
    //     };
    //
    //     const handleKeyCombination = (event) => {
    //         if (
    //             (event.ctrlKey && event.shiftKey && event.key === 'I') ||
    //             (event.ctrlKey && event.shiftKey && event.key === 'J') ||
    //             (event.key === 'F12') ||
    //             (event.ctrlKey && event.key === 'U')
    //         ) {
    //             event.preventDefault();
    //             const audio = new Audio('/rightclickmeme.mp3');
    //             audio.play();
    //         }
    //     };
    //
    //     document.addEventListener('contextmenu', handleRightClick);
    //     document.addEventListener('keydown', handleKeyCombination);
    //
    //     return () => {
    //         document.removeEventListener('contextmenu', handleRightClick);
    //         document.removeEventListener('keydown', handleKeyCombination);
    //     };
    // }, []);

    document.addEventListener('mousemove', (event) => {
        setCursorPosition({
            x: event.clientX + 90,
            y: event.clientY + window.scrollY
        });
    });

    return (
        <Suspense>

            <img src='/rightClickMeme.gif' alt='meme' style={{
                left: cursorPosition.x + 'px',
                top: cursorPosition.y + 'px',
                transform: 'translate(-50%, -50%)',
                pointerEvents: 'none',
            }}
                 className={`${isMemeVisible ? 'block' : 'hidden'} z-[3000] absolute rounded-full boxShadow w-[150px] h-[150px] transition-all shadow-md object-cover`}/>


            {/* all routes */}
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/about-us" element={<AboutUsPage/>}/>
                <Route path="/privacy-policy" element={<PrivacyPolicyPage/>}/>

                {/* documentation */}
                <Route path="/docs/overview" element={<OverviewPage/>}/>
                <Route path="/docs/resources" element={<ResourcesPage/>}/>
                <Route path="/custom-hooks" element={<ReactCustomHooksPage/>}/>
                <Route path="/docs/installation" element={<InstallationPage/>}/>
                <Route path="/templates" element={<TempletePage/>}/>

                {/* components */}

                <Route
                    path="/components/all-components"
                    element={<AllComponentsPage/>}
                />

                {/* inputs */}
                <Route path="/components/input-text" element={<InputTextPage/>}/>
                <Route
                    path="/components/input-textarea"
                    element={<InputTextareaPage/>}
                />
                <Route path="/components/input-switch" element={<InputSwitchPage/>}/>
                <Route path="/components/otp-input" element={<OtpInputPage/>}/>
                <Route path="/components/input-select" element={<InputSelectPage/>}/>
                <Route path="/components/input-radio" element={<InputRadioPage/>}/>
                <Route path="/components/input-file" element={<InputFilePage/>}/>
                <Route path="/components/input-number" element={<NumberInputPage/>}/>
                <Route path="/components/strong-password" element={<StrongPasswordPage/>}/>
                <Route path="/components/input-checkbox" element={<CheckboxInputPage/>}/>
                <Route path="/components/input-range" element={<InputSliderPage/>}/>

                {/* buttons */}
                <Route path="/components/normal-button" element={<NormalPage/>}/>
                <Route path="/components/login-buttons" element={<AuthButtonPage/>}/>
                <Route path="/components/dropdown-button" element={<DropdownButtonPage/>}/>
                <Route
                    path="/components/animated-button"
                    element={<AnimatedButtonPage/>}
                />

                {/* navigation */}
                <Route path="/components/pagination" element={<PaginationPage/>}/>
                <Route path="/components/tabs" element={<TabsPage/>}/>
                <Route path="/components/modal" element={<ModalPage/>}/>
                <Route path="/components/progress-bar" element={<ProgressBarPage/>}/>
                <Route path="/components/chip" element={<ChipPage/>}/>
                <Route path="/components/timer" element={<TimerPage/>}/>
                <Route path="/components/breadcrumb" element={<BreadcrumbPage/>}/>
                <Route path="/components/rating" element={<RatingPage/>}/>
                <Route path="/components/stepper" element={<StepsPage/>}/>

                {/* feedback */}
                <Route path="/components/context-menu" element={<ContextMenuPage/>}/>
                <Route path="/components/skeleton" element={<SkeletonPage/>}/>
                <Route
                    path="/components/alert-message"
                    element={<AlertMessagePage/>}
                />
                <Route path="/components/dialog-message" element={<DialogPage/>}/>
                <Route path="/components/tree-dropdown" element={<TreeDropdownPage/>}/>
                <Route path="/components/loader" element={<LoaderPage/>}/>
                <Route path="/components/testimonials" element={<TestimonialPage/>}/>
                <Route path="/components/notification" element={<NotificationPage/>}/>

                {/* surface */}
                <Route path="/components/cards" element={<CardPage/>}/>
                <Route path="/components/drag-and-drop" element={<DragAndDropPage/>}/>
                <Route path="/components/animated-cards" element={<AnimatedCardsPage/>}/>
                <Route
                    path="/components/image-gallery"
                    element={<ImageGalleryPage/>}
                />
                <Route path="/components/carousel" element={<CarouselPage />}/>
                <Route path="/components/according" element={<AccordingPage/>}/>
                <Route path="/components/appbar" element={<AppbarPage/>}/>
                <Route path="/components/resizable-layout" element={<ResizableLayoutPage/>}/>

                {/* data display */}
                <Route path="/components/badge" element={<BadgePage/>}/>
                <Route path="/components/table" element={<TablePage/>}/>
                <Route path="/components/pie-chart" element={<PieChartPage/>}/>
                <Route path="/components/tooltip" element={<TooltipPage/>}/>
                <Route path="/components/timeline" element={<TimelinePage/>}/>

                {/* randoms */}
                <Route path="/components/code" element={<CodeSnippetPage/>}/>
                <Route path="/components/snippet" element={<SnippetPage/>}/>


                {/*  all blocks route  */}
                <Route path="/blocks/all-blocks" element={<AllBlocksPage/>}/>
                <Route path="/blocks/responsive-navbar" element={<ResponsiveNavbarPage/>}/>
                <Route path="/blocks/hero-section" element={<HeroSectionPage/>}/>
                <Route path="/blocks/contact-form" element={<ContactFormPage/>}/>
                <Route path="/blocks/responsive-search-bar" element={<ResponsiveSearchbarPage/>}/>
                <Route path="/blocks/responsive-footer" element={<ResponsiveFooterPage/>}/>
                <Route path="/blocks/404-page" element={<WrongUrlErrorPage/>}/>
                <Route path="/blocks/pricing-section" element={<PricingSectionPage/>}/>
                <Route path="/blocks/newsletter-form" element={<NewsletterSectionPage/>}/>
                <Route path="/blocks/multi-step-form" element={<MultipageFormPage/>}/>
                <Route path="/blocks/responsive-sidebar" element={<ResponsiveSidebarPage/>}/>
                <Route path="/blocks/empty-page" element={<WrongRoutePage/>}/>


                {/*  icons  */}
                <Route path="/icons" element={<IconsPage/>}/>

                {/* opacity palette */}
                <Route path='/color-palette' element={<OpacityPalettePage/>}/>

                {/* layout playground */}
                <Route path='/layout-playground' element={<LayoutPlaygroundPage/>}/>

                {/* layout playground */}
                <Route path='/shortcut-generator' element={<ShortcutGeneratorPage/>}/>

                {/* become ZenUI Hero */}
                <Route path='/zenui-hero-docs' element={<ZenUIHeroDocsPage/>}/>

                {/*  empty route  */}
                <Route path="*" element={<EmptyPage/>}/>

            </Routes>

            <CookieModal isModalOpen={isCookie} setisModalOpen={setIsCookie}/>
        </Suspense>
    );
};

export default App;
