export const ChildrenProps = ({ name, email, password, children }) => {
    //   const { name, email, password } = props;
    // console.log(props, "props in ChildrenProps");
  return (
    <div>
      ChildrenProps
      {name} - {email} - {password}
      {children}
    </div>
  );
};
