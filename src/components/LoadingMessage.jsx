

export const LoadingMessage = ( { isLoading } ) => {

    const load = isLoading 
    ? ( <h2>Cargando...</h2> )
    : null;

  return load;
}
