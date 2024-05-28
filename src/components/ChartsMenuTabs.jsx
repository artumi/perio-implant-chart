export default function ChartsMenuTabs({
  children,
  buttons,
  buttonsContainer,
}) {
  const ButtonsContainer = buttonsContainer;
  return (
    <>
      <ButtonsContainer>{buttons}</ButtonsContainer>
      {children}
    </>
  );
}
