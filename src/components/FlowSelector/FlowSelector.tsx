import React /* { useEffect , useState } */ from 'react';

interface IProps {
    originLocal: string;
    setOriginLocal: (value: string) => void;
    destinationLocal: string;
    setDestinationLocal: (value: string) => void;
    customOrigin: string;
    setCustomOrigin: (value: string) => void;
    customDestination: string;
    setCustomDestination: (value: string) => void;
    isCustomOrigin: boolean;
    setIsCustomOrigin: (value: boolean) => void;
    predefinedLocations: string[];
}

const FlowSelector = ({
    originLocal, setOriginLocal,
    destinationLocal, setDestinationLocal,
    customOrigin, setCustomOrigin,
    customDestination, setCustomDestination,
    isCustomOrigin, setIsCustomOrigin,
    predefinedLocations
}: IProps) => {

    const handleOrigemChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setOriginLocal(e.target.value);
        if (e.target.value !== 'Outro') {
            setCustomOrigin('');
        }
    };

    const handleDestinoChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setDestinationLocal(e.target.value);
        if (e.target.value !== 'Outro') {
            // setCustomDestination('');
        }
    };

    return (
        <div className="rounded-lg">

            <div className="flex flex-col sm:flex-row gap-6 mb-6">
                <div className="flex-1">
                    <label className="block font-semibold text-gray-700 mb-2">
                        Local de Origem:
                    </label>
                    <select
                        className="w-full p-3 border-2 border-gray-300 rounded-md"
                        value={originLocal}
                        onChange={handleOrigemChange}
                    >
                        <option value="">Selecione a origem</option>
                        {predefinedLocations.map((local) => (
                            <option key={local} value={local}>
                                {local}
                            </option>
                        ))}
                    </select>
                    {originLocal === 'Outro' && (
                        <input
                            type="text"
                            className="w-full mt-2 p-3 border-2 border-gray-300 rounded-md"
                            placeholder="Digite o local de origem"
                            value={customOrigin}
                            onChange={(e) => {
                                const value = e.target.value;
                                setCustomOrigin(value)
                                if (isCustomOrigin) {
                                    setCustomDestination(value);
                                }
                            }}
                        />
                    )}
                </div>

                <div className="flex items-center justify-center text-2xl text-gray-600">
                    →
                </div>

                <div className="flex-1">
                    <label className="block font-semibold text-gray-700 mb-2">
                        Local de Destino:
                    </label>
                    <select
                        className="w-full p-3 border-2 border-gray-300 rounded-md"
                        value={destinationLocal}
                        onChange={handleDestinoChange}
                    >
                        <option value="">Selecione o destino</option>
                        {predefinedLocations.map((local) => (
                            <option key={local} value={local}>
                                {local}
                            </option>
                        ))}
                    </select>
                    {destinationLocal === 'Outro' && (
                        <input
                            type="text"
                            className="w-full mt-2 p-3 border-2 border-gray-300 rounded-md"
                            placeholder="Digite o local de destino"
                            value={customDestination}
                            onChange={(e) => {
                                const value = e.target.value;
                                setCustomDestination(value)
                                setIsCustomOrigin(false);
                                if (value === '' && !isCustomOrigin) {
                                    setIsCustomOrigin(true);
                                }
                            }}
                        />
                    )}
                </div>
            </div>

            <div className="bg-gray-100 p-4 rounded-md">
                <strong>Rota selecionada:</strong>{' '}
                {originLocal && destinationLocal ? (
                    <span>
                        {originLocal === 'Outro' ? customOrigin : originLocal} →{' '}
                        {destinationLocal === 'Outro' ? customDestination : destinationLocal}
                    </span>
                ) : (
                    <span>Selecione os locais de origem e destino</span>
                )}
            </div>
        </div>
    );
};

export default FlowSelector;