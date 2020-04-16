const DrugList = [
  {index: '0', value: 'Cetrorelix'},
  {index: '1', value: 'Thiamine'},
  {index: '2', value: 'Vitamin'},
  {index: '3', value: 'Pravastatin'},
  {index: '4', value: 'Fluvoxamine'},
  {index: '5', value: 'Valsartan'},
  {index: '6', value: 'Ramipril'},
  {index: '7', value: 'Flunisolide'},
  {index: '8', value: 'Baclofen'},
  {index: '9', value: 'Amphetamine'},
  {index: '10', value: 'Nicotine'},
  {index: '11', value: 'Cevimeline'},
  {index: '12', value: 'Lorazepam'},
  {index: '13', value: 'Esmolol'},
  {index: '14', value: 'Bortezomib'},
  {index: '15', value: 'Phentermine'},
  {index: '16', value: 'Tramadol'},
  {index: '17', value: 'Betaxolol'},
  {index: '18', value: 'Fluconazole'},
  {index: '19', value: 'Troglitazone'},
  {index: '20', value: 'Oseltamivir'},
  {index: '21', value: 'Erythromycin'},
  {index: '22', value: 'Hydroxocobalamin'},
  {index: '23', value: 'Caffeine'},
  {index: '24', value: 'Succinylcholine'},
  {index: '25', value: 'Sildenafil'},
  {index: '26', value: 'Dofetilide'},
  {index: '27', value: 'Pyrimethamine'},
  {index: '28', value: 'Reserpine'},
  {index: '29', value: 'Azithromycin'},
  {index: '30', value: 'Ticlopidine'},
  {index: '31', value: 'Adapalene'},
  {index: '32', value: 'Midodrine'},
  {index: '33', value: 'Pantoprazole'},
  {index: '34', value: 'Citalopram'},
  {index: '35', value: 'Eletriptan'},
  {index: '36', value: 'Moxifloxacin'},
  {index: '37', value: 'Nelfinavir'},
  {index: '38', value: 'Glimepiride'},
  {index: '39', value: 'Indinavir'},
  {index: '40', value: 'Lovastatin'},
  {index: '41', value: 'Enflurane'},
  {index: '42', value: 'Pregabalin'},
  {index: '43', value: 'Temazepam'},
  {index: '44', value: 'Milrinone'},
  {index: '45', value: 'Nevirapine'},
  {index: '46', value: 'Cladribine'},
  {index: '47', value: 'Ranolazine'},
  {index: '48', value: 'Ziprasidone'},
  {index: '49', value: 'Methysergide'},
  {index: '50', value: 'Cabergoline'},
  {index: '51', value: 'Dapsone'},
  {index: '52', value: 'Phenytoin'},
  {index: '53', value: 'Doxycycline'},
  {index: '54', value: 'Clotrimazole'},
  {index: '55', value: 'Anagrelide'},
  {index: '56', value: 'Sulfisoxazole'},
  {index: '57', value: 'Metoprolol'},
  {index: '58', value: 'Ropinirole'},
  {index: '59', value: 'Diatrizoate'},
  {index: '60', value: 'Topiramate'},
  {index: '61', value: 'Amsacrine'},
  {index: '62', value: 'Theophylline'},
  {index: '63', value: 'Argatroban'},
  {index: '64', value: 'Disopyramide'},
  {index: '65', value: 'Lidocaine'},
  {index: '66', value: 'Pamidronate'},
  {index: '67', value: 'Clemastine'},
  {index: '68', value: 'Acarbose'},
  {index: '69', value: 'Venlafaxine'},
  {index: '70', value: 'Travoprost'},
  {index: '71', value: 'Amcinonide'},
  {index: '72', value: 'Atomoxetine'},
  {index: '73', value: 'Chlorambucil'},
  {index: '74', value: 'Etomidate'},
  {index: '75', value: 'Raltitrexed'},
  {index: '76', value: 'Morphine'},
  {index: '77', value: 'Ropivacaine'},
  {index: '78', value: 'Bupivacaine'},
  {index: '79', value: 'Penciclovir'},
  {index: '80', value: 'Tranexamic'},
  {index: '81', value: 'Ertapenem'},
  {index: '82', value: 'Bexarotene'},
  {index: '83', value: 'Ibutilide'},
  {index: '84', value: 'Chlorthalidone'},
  {index: '85', value: 'Pentobarbital'},
  {index: '86', value: 'Valproic'},
  {index: '87', value: 'Zolmitriptan'},
  {index: '88', value: 'Acetaminophen'},
  {index: '89', value: 'Gefitinib'},
  {index: '90', value: 'Codeine'},
  {index: '91', value: 'Piperacillin'},
  {index: '92', value: 'Dihydroergotamine'},
  {index: '93', value: 'Amitriptyline'},
  {index: '94', value: 'Tolcapone'},
  {index: '95', value: 'Fluorometholone'},
  {index: '96', value: 'Hydromorphone'},
  {index: '97', value: 'Indomethacin'},
  {index: '98', value: 'Ethambutol'},
  {index: '99', value: 'Metformin'},
  {index: '100', value: 'Methadone'},
  {index: '101', value: 'Olanzapine'},
  {index: '102', value: 'Atenolol'},
  {index: '103', value: 'Pimecrolimus'},
  {index: '104', value: 'Omeprazole'},
  {index: '105', value: 'Pyrazinamide'},
  {index: '106', value: 'Cetirizine'},
  {index: '107', value: 'Diltiazem'},
  {index: '108', value: 'Protriptyline'},
  {index: '109', value: 'Alfuzosin'},
  {index: '110', value: 'Clobazam'},
  {index: '111', value: 'Minoxidil'},
  {index: '112', value: 'Megestrol'},
  {index: '113', value: 'Aztreonam'},
  {index: '114', value: 'Chlorzoxazone'},
  {index: '115', value: 'Aminoglutethimide'},
  {index: '116', value: 'Mefloquine'},
  {index: '117', value: 'Sulfadiazine'},
  {index: '118', value: 'Vinorelbine'},
  {index: '119', value: 'Anidulafungin'},
  {index: '120', value: 'Clozapine'},
  {index: '121', value: 'Sucralfate'},
  {index: '122', value: 'Levonorgestrel'},
  {index: '123', value: 'Norepinephrine'},
  {index: '124', value: 'Cidofovir'},
  {index: '125', value: 'Mirtazapine'},
  {index: '126', value: 'Meprobamate'},
  {index: '127', value: 'Timolol'},
  {index: '128', value: 'Treprostinil'},
  {index: '129', value: 'Colestipol'},
  {index: '130', value: 'Trihexyphenidyl'},
  {index: '131', value: 'Palonosetron'},
  {index: '132', value: 'Mexiletine'},
  {index: '133', value: 'Amlodipine'},
  {index: '134', value: 'Tacrine'},
  {index: '135', value: 'Triamterene'},
  {index: '136', value: 'Phenylephrine'},
  {index: '137', value: 'Digoxin'},
  {index: '138', value: 'Nimodipine'},
  {index: '139', value: 'Carisoprodol'},
  {index: '140', value: 'Progesterone'},
  {index: '141', value: 'Sorafenib'},
  {index: '142', value: 'Griseofulvin'},
  {index: '143', value: 'Nisoldipine'},
  {index: '144', value: 'Alprazolam'},
  {index: '145', value: 'Loxapine'},
  {index: '146', value: 'Carbachol'},
  {index: '147', value: 'Rosiglitazone'},
  {index: '148', value: 'Pramipexole'},
  {index: '149', value: 'Ampicillin'},
  {index: '150', value: 'Penicillin'},
  {index: '151', value: 'Secobarbital'},
  {index: '152', value: 'Miglustat'},
  {index: '153', value: 'Spironolactone'},
  {index: '154', value: 'Methylphenidate'},
  {index: '155', value: 'Methocarbamol'},
  {index: '156', value: 'Zolpidem'},
  {index: '157', value: 'Famciclovir'},
  {index: '158', value: 'Lindane'},
  {index: '159', value: 'Prochlorperazine'},
  {index: '160', value: 'Cyproheptadine'},
  {index: '161', value: 'Allopurinol'},
  {index: '162', value: 'Ceftazidime'},
  {index: '163', value: 'Cerivastatin'},
  {index: '164', value: 'Trimethoprim'},
  {index: '165', value: 'Gemcitabine'},
  {index: '166', value: 'Entecavir'},
  {index: '167', value: 'Teniposide'},
  {index: '168', value: 'Chloramphenicol'},
  {index: '169', value: 'Lansoprazole'},
  {index: '170', value: 'Dipivefrin'},
  {index: '171', value: 'Droperidol'},
  {index: '172', value: 'Meperidine'},
  {index: '173', value: 'Loratadine'},
  {index: '174', value: 'Prazosin'},
  {index: '175', value: 'Imipramine'},
  {index: '176', value: 'Acitretin'},
  {index: '177', value: 'Verteporfin'},
  {index: '178', value: 'Nabumetone'},
  {index: '179', value: 'Ketorolac'},
  {index: '180', value: 'Montelukast'},
  {index: '181', value: 'Fluoxetine'},
  {index: '182', value: 'Methohexital'},
  {index: '183', value: 'Chlordiazepoxide'},
  {index: '184', value: 'Duloxetine'},
  {index: '185', value: 'Chlorpromazine'},
  {index: '186', value: 'Rimantadine'},
  {index: '187', value: 'Amikacin'},
  {index: '188', value: 'Lenalidomide'},
  {index: '189', value: 'Raloxifene'},
  {index: '190', value: 'Celecoxib'},
  {index: '191', value: 'Brimonidine'},
  {index: '192', value: 'Dicloxacillin'},
  {index: '193', value: 'Nabilone'},
  {index: '194', value: 'Sotalol'},
  {index: '195', value: 'Buspirone'},
  {index: '196', value: 'Miglitol'},
  {index: '197', value: 'Fosinopril'},
  {index: '198', value: 'Cefotaxime'},
  {index: '199', value: 'Entacapone'},
  {index: '200', value: 'Zidovudine'},
  {index: '201', value: 'Darifenacin'},
  {index: '202', value: 'Oxycodone'},
  {index: '203', value: 'Flutamide'},
  {index: '204', value: 'Tolmetin'},
  {index: '205', value: 'Cimetidine'},
  {index: '206', value: 'Haloperidol'},
  {index: '207', value: 'Ritonavir'},
  {index: '208', value: 'Nitazoxanide'},
  {index: '209', value: 'Cisplatin'},
  {index: '210', value: 'Albendazole'},
  {index: '211', value: 'Trandolapril'},
  {index: '212', value: 'Caspofungin'},
  {index: '213', value: 'Carteolol'},
  {index: '214', value: 'Metolazone'},
  {index: '215', value: 'Oxaliplatin'},
  {index: '216', value: 'Foscarnet'},
  {index: '217', value: 'Erlotinib'},
  {index: '218', value: 'Cyclophosphamide'},
  {index: '219', value: 'Mephenytoin'},
  {index: '220', value: 'Rofecoxib'},
  {index: '221', value: 'Cefdinir'},
  {index: '222', value: 'Ciprofloxacin'},
  {index: '223', value: 'Gadoversetamide'},
  {index: '224', value: 'Toremifene'},
  {index: '225', value: 'Nortriptyline'},
  {index: '226', value: 'Vincristine'},
  {index: '227', value: 'Benazepril'},
  {index: '228', value: 'Amoxapine'},
  {index: '229', value: 'Desoximetasone'},
  {index: '230', value: 'Azelaic'},
  {index: '231', value: 'Zafirlukast'},
  {index: '232', value: 'Propylthiouracil'},
  {index: '233', value: 'Piroxicam'},
  {index: '234', value: 'Lamotrigine'},
  {index: '235', value: 'Hydroxyzine'},
  {index: '236', value: 'Bosentan'},
  {index: '237', value: 'Tigecycline'},
  {index: '238', value: 'Doxapram'},
  {index: '239', value: 'Methotrexate'},
  {index: '240', value: 'Carbamazepine'},
  {index: '241', value: 'Cephalexin'},
  {index: '242', value: 'Propranolol'},
  {index: '243', value: 'Atropine'},
  {index: '244', value: 'Fenoprofen'},
  {index: '245', value: 'Clonidine'},
  {index: '246', value: 'Carbenicillin'},
  {index: '247', value: 'Valdecoxib'},
  {index: '248', value: 'Lactulose'},
  {index: '249', value: 'Voriconazole'},
  {index: '250', value: 'Nizatidine'},
  {index: '251', value: 'Diclofenac'},
  {index: '252', value: 'Doxazosin'},
  {index: '253', value: 'Fluocinolone'},
  {index: '254', value: 'Ethosuximide'},
  {index: '255', value: 'Amiloride'},
  {index: '256', value: 'Oxytetracycline'},
  {index: '257', value: 'Labetalol'},
  {index: '258', value: 'Linezolid'},
  {index: '259', value: 'Ivermectin'},
  {index: '260', value: 'Medroxyprogesterone'},
  {index: '261', value: 'Sulindac'},
  {index: '262', value: 'Chloroquine'},
  {index: '263', value: 'Ethionamide'},
  {index: '264', value: 'Butorphanol'},
  {index: '265', value: 'Bisoprolol'},
  {index: '266', value: 'Rifabutin'},
  {index: '267', value: 'Demeclocycline'},
  {index: '268', value: 'Imatinib'},
  {index: '269', value: 'Triamcinolone'},
  {index: '270', value: 'Oxandrolone'},
  {index: '271', value: 'Nicardipine'},
  {index: '272', value: 'Fluphenazine'},
  {index: '273', value: 'Testosterone'},
  {index: '274', value: 'Efavirenz'},
  {index: '275', value: 'Alendronate'},
  {index: '276', value: 'Clofarabine'},
  {index: '277', value: 'Dexmedetomidine'},
  {index: '278', value: 'Prednisone'},
  {index: '279', value: 'Adenosine'},
  {index: '280', value: 'Simvastatin'},
  {index: '281', value: 'Pemetrexed'},
  {index: '282', value: 'Nystatin'},
  {index: '283', value: 'Mitotane'},
  {index: '284', value: 'Stavudine'},
  {index: '285', value: 'Leucovorin'},
  {index: '286', value: 'Dyphylline'},
  {index: '287', value: 'Pentazocine'},
  {index: '288', value: 'Latanoprost'},
  {index: '289', value: 'Trazodone'},
  {index: '290', value: 'Mecamylamine'},
  {index: '291', value: 'Acamprosate'},
  {index: '292', value: 'Verapamil'},
  {index: '293', value: 'Nilutamide'},
  {index: '294', value: 'Epinephrine'},
  {index: '295', value: 'Sumatriptan'},
  {index: '296', value: 'Cefixime'},
  {index: '297', value: 'Chlorpropamide'},
  {index: '298', value: 'Aprepitant'},
  {index: '299', value: 'Galantamine'},
  {index: '300', value: 'Tamoxifen'},
  {index: '301', value: 'Losartan'},
  {index: '302', value: 'Thioridazine'},
  {index: '303', value: 'Moricizine'},
  {index: '304', value: 'Amphotericin'},
  {index: '305', value: 'Warfarin'},
  {index: '306', value: 'Midazolam'},
  {index: '307', value: 'Tobramycin'},
  {index: '308', value: 'Trovafloxacin'},
  {index: '309', value: 'Fludrocortisone'},
  {index: '310', value: 'Flurazepam'},
  {index: '311', value: 'Moexipril'},
  {index: '312', value: 'Phentolamine'},
  {index: '313', value: 'Fluorescein'},
  {index: '314', value: 'Daunorubicin'},
  {index: '315', value: 'Furosemide'},
  {index: '316', value: 'Ergotamine'},
  {index: '317', value: 'Tizanidine'},
  {index: '318', value: 'Nitrofurantoin'},
  {index: '319', value: 'Eplerenone'},
  {index: '320', value: 'Amprenavir'},
  {index: '321', value: 'Methazolamide'},
  {index: '322', value: 'Naltrexone'},
  {index: '323', value: 'Delavirdine'},
  {index: '324', value: 'Tamsulosin'},
  {index: '325', value: 'Sufentanil'},
  {index: '326', value: 'Lamivudine'},
  {index: '327', value: 'Flurbiprofen'},
  {index: '328', value: 'Oxacillin'},
  {index: '329', value: 'Apomorphine'},
  {index: '330', value: 'Paroxetine'},
  {index: '331', value: 'Adefovir'},
  {index: '332', value: 'Procaine'},
  {index: '333', value: 'Imiquimod'},
  {index: '334', value: 'Nitroglycerin'},
  {index: '335', value: 'Rocuronium'},
  {index: '336', value: 'Thiabendazole'},
  {index: '337', value: 'Nateglinide'},
  {index: '338', value: 'Atracurium'},
  {index: '339', value: 'Pralidoxime'},
  {index: '340', value: 'Risperidone'},
  {index: '341', value: 'Riluzole'},
  {index: '342', value: 'Mannitol'},
  {index: '343', value: 'Modafinil'},
  {index: '344', value: 'Etodolac'},
  {index: '345', value: 'Prilocaine'},
  {index: '346', value: 'Epinastine'},
  {index: '347', value: 'Isoflurane'},
  {index: '348', value: 'Ethotoin'},
  {index: '349', value: 'Hexachlorophene'},
  {index: '350', value: 'Dolasetron'},
  {index: '351', value: 'Clopidogrel'},
  {index: '352', value: 'Tetracycline'},
  {index: '353', value: 'Meropenem'},
  {index: '354', value: 'Irinotecan'},
  {index: '355', value: 'Methimazole'},
  {index: '356', value: 'Olopatadine'},
  {index: '357', value: 'Malathion'},
  {index: '358', value: 'Etoposide'},
  {index: '359', value: 'Oxcarbazepine'},
  {index: '360', value: 'Nalidixic'},
  {index: '361', value: 'Phenelzine'},
  {index: '362', value: 'Propantheline'},
  {index: '363', value: 'Estradiol'},
  {index: '364', value: 'Mefenamic'},
  {index: '365', value: 'Naproxen'},
  {index: '366', value: 'Perindopril'},
  {index: '367', value: 'Primidone'},
  {index: '368', value: 'Sulfasalazine'},
  {index: '369', value: 'Candesartan'},
  {index: '370', value: 'Tazarotene'},
  {index: '371', value: 'Fenoldopam'},
  {index: '372', value: 'Alfentanil'},
  {index: '373', value: 'Dicyclomine'},
  {index: '374', value: 'Pentoxifylline'},
  {index: '375', value: 'Indapamide'},
  {index: '376', value: 'Tropicamide'},
  {index: '377', value: 'Biperiden'},
  {index: '378', value: 'Ribavirin'},
  {index: '379', value: 'Fentanyl'},
  {index: '380', value: 'Meloxicam'},
  {index: '381', value: 'Propofol'},
  {index: '382', value: 'Acetazolamide'},
  {index: '383', value: 'Tadalafil'},
  {index: '384', value: 'Disulfiram'},
  {index: '385', value: 'Natamycin'},
  {index: '386', value: 'Cinoxacin'},
  {index: '387', value: 'Fosfomycin'},
  {index: '388', value: 'Diazepam'},
  {index: '389', value: 'Trifluoperazine'},
  {index: '390', value: 'Cefaclor'},
  {index: '391', value: 'Mifepristone'},
  {index: '392', value: 'Brompheniramine'},
  {index: '393', value: 'Loperamide'},
  {index: '394', value: 'Tolazamide'},
  {index: '395', value: 'Dobutamine'},
  {index: '396', value: 'Oxazepam'},
  {index: '397', value: 'Donepezil'},
  {index: '398', value: 'Nalbuphine'},
  {index: '399', value: 'Clofazimine'},
  {index: '400', value: 'Perphenazine'},
  {index: '401', value: 'Dacarbazine'},
  {index: '402', value: 'Temozolomide'},
  {index: '403', value: 'Terbinafine'},
  {index: '404', value: 'Prednisolone'},
  {index: '405', value: 'Diflunisal'},
  {index: '406', value: 'Vardenafil'},
  {index: '407', value: 'Ranitidine'},
  {index: '408', value: 'Tacrolimus'},
  {index: '409', value: 'Benzonatate'},
  {index: '410', value: 'Dorzolamide'},
  {index: '411', value: 'Suprofen'},
  {index: '412', value: 'Terbutaline'},
  {index: '413', value: 'Conivaptan'},
  {index: '414', value: 'Guaifenesin'},
  {index: '415', value: 'Eprosartan'},
  {index: '416', value: 'Chlorhexidine'},
  {index: '417', value: 'Emtricitabine'},
  {index: '418', value: 'Quinapril'},
  {index: '419', value: 'Isosorbide'},
  {index: '420', value: 'Bumetanide'},
  {index: '421', value: 'Granisetron'},
  {index: '422', value: 'Rimexolone'},
  {index: '423', value: 'Triazolam'},
  {index: '424', value: 'Ethanol'},
  {index: '425', value: 'Remifentanil'},
  {index: '426', value: 'Didanosine'},
  {index: '427', value: 'Ethacrynic'},
  {index: '428', value: 'Ondansetron'},
  {index: '429', value: 'Bimatoprost'},
  {index: '430', value: 'Tiagabine'},
  {index: '431', value: 'Cocaine'},
  {index: '432', value: 'Quinidine'},
  {index: '433', value: 'Zonisamide'},
  {index: '434', value: 'Paricalcitol'},
  {index: '435', value: 'Tinidazole'},
  {index: '436', value: 'Repaglinide'},
  {index: '437', value: 'Amantadine'},
  {index: '438', value: 'Metronidazole'},
  {index: '439', value: 'Almotriptan'},
  {index: '440', value: 'Spectinomycin'},
  {index: '441', value: 'Ketotifen'},
  {index: '442', value: 'Buprenorphine'},
  {index: '443', value: 'Cyclobenzaprine'},
  {index: '444', value: 'Phenoxybenzamine'},
  {index: '445', value: 'Famotidine'},
  {index: '446', value: 'Misoprostol'},
  {index: '447', value: 'Tipranavir'},
  {index: '448', value: 'Mesoridazine'},
  {index: '449', value: 'Diethylpropion'},
  {index: '450', value: 'Salmeterol'},
  {index: '451', value: 'Felbamate'},
  {index: '452', value: 'Fexofenadine'},
  {index: '453', value: 'Isoniazid'},
  {index: '454', value: 'Naratriptan'},
  {index: '455', value: 'Rizatriptan'},
  {index: '456', value: 'Carboplatin'},
  {index: '457', value: 'Methylprednisolone'},
  {index: '458', value: 'Pindolol'},
  {index: '459', value: 'Mepivacaine'},
  {index: '460', value: 'Zaleplon'},
  {index: '461', value: 'Bromfenac'},
  {index: '462', value: 'Apraclonidine'},
  {index: '463', value: 'Telmisartan'},
  {index: '464', value: 'Desloratadine'},
  {index: '465', value: 'Methyldopa'},
  {index: '466', value: 'Alosetron'},
  {index: '467', value: 'Azelastine'},
  {index: '468', value: 'Ezetimibe'},
  {index: '469', value: 'Dipyridamole'},
  {index: '470', value: 'Telithromycin'},
  {index: '471', value: 'Lomefloxacin'},
  {index: '472', value: 'Cyclopentolate'},
  {index: '473', value: 'Ramelteon'},
  {index: '474', value: 'Physostigmine'},
  {index: '475', value: 'Formoterol'},
  {index: '476', value: 'Glycopyrrolate'},
  {index: '477', value: 'Dopamine'},
  {index: '478', value: 'Rivastigmine'},
  {index: '479', value: 'Exemestane'},
  {index: '480', value: 'Oxaprozin'},
  {index: '481', value: 'Azathioprine'},
  {index: '482', value: 'Neomycin'},
  {index: '483', value: 'Gabapentin'},
  {index: '484', value: 'Doxorubicin'},
  {index: '485', value: 'Frovatriptan'},
  {index: '486', value: 'Hydrochlorothiazide'},
  {index: '487', value: 'Ganciclovir'},
  {index: '488', value: 'Hydroxyurea'},
  {index: '489', value: 'Letrozole'},
  {index: '490', value: 'Busulfan'},
  {index: '491', value: 'Ketoprofen'},
  {index: '492', value: 'Metyrapone'},
  {index: '493', value: 'Cinacalcet'},
  {index: '494', value: 'Clobetasol'},
  {index: '495', value: 'Balsalazide'},
  {index: '496', value: 'Minocycline'},
  {index: '497', value: 'Guanfacine'},
  {index: '498', value: 'Bethanechol'},
  {index: '499', value: 'Felodipine'},
  {index: '500', value: 'Mycophenolic'},
  {index: '501', value: 'Ketoconazole'},
  {index: '502', value: 'Irbesartan'},
  {index: '503', value: 'Topotecan'},
  {index: '504', value: 'Probenecid'},
  {index: '505', value: 'Procainamide'},
  {index: '506', value: 'Tolterodine'},
  {index: '507', value: 'Selegiline'},
  {index: '508', value: 'Fenofibrate'},
  {index: '509', value: 'Thalidomide'},
  {index: '510', value: 'Melphalan'},
  {index: '511', value: 'Memantine'},
  {index: '512', value: 'Gatifloxacin'},
  {index: '513', value: 'Lubiprostone'},
  {index: '514', value: 'Fluocinonide'},
  {index: '515', value: 'Abacavir'},
  {index: '516', value: 'Ibuprofen'},
  {index: '517', value: 'Praziquantel'},
  {index: '518', value: 'Norfloxacin'},
  {index: '519', value: 'Amoxicillin'},
  {index: '520', value: 'Oxybutynin'},
  {index: '521', value: 'Isoproterenol'},
  {index: '522', value: 'Glipizide'},
  {index: '523', value: 'Clonazepam'},
  {index: '524', value: 'Promethazine'},
  {index: '525', value: 'Atazanavir'},
  {index: '526', value: 'Fludarabine'},
  {index: '527', value: 'Diphenhydramine'},
  {index: '528', value: 'Atorvastatin'},
  {index: '529', value: 'Tegaserod'},
  {index: '530', value: 'Vigabatrin'},
  {index: '531', value: 'Streptomycin'},
  {index: '532', value: 'Orlistat'},
  {index: '533', value: 'Emedastine'},
  {index: '534', value: 'Pilocarpine'},
  {index: '535', value: 'Benzocaine'},
  {index: '536', value: 'Primaquine'},
  {index: '537', value: 'Iloprost'},
  {index: '538', value: 'Fluvastatin'},
  {index: '539', value: 'Leflunomide'},
  {index: '540', value: 'Rosuvastatin'},
  {index: '541', value: 'Pimozide'},
  {index: '542', value: 'Capecitabine'},
  {index: '543', value: 'Sertraline'},
  {index: '544', value: 'Sibutramine'},
  {index: '545', value: 'Levocabastine'},
  {index: '546', value: 'Miconazole'},
  {index: '547', value: 'Cefuroxime'},
  {index: '548', value: 'Papaverine'},
  {index: '549', value: 'Chlorpheniramine'},
  {index: '550', value: 'Nifedipine'},
  {index: '551', value: 'Atovaquone'},
  {index: '552', value: 'Amiodarone'},
  {index: '553', value: 'Diazoxide'},
  {index: '554', value: 'Gliclazide'},
  {index: '555', value: 'Dutasteride'},
  {index: '556', value: 'Econazole'},
  {index: '557', value: 'Bicalutamide'},
  {index: '558', value: 'Rabeprazole'},
  {index: '559', value: 'Prednicarbate'},
  {index: '560', value: 'Pioglitazone'},
  {index: '561', value: 'Carvedilol'},
  {index: '562', value: 'Cefadroxil'},
  {index: '563', value: 'Micafungin'},
  {index: '564', value: 'Doxepin'},
  {index: '565', value: 'Amifostine'},
  {index: '566', value: 'Flavoxate'},
  {index: '567', value: 'Nefazodone'},
  {index: '568', value: 'Cefprozil'},
  {index: '569', value: 'Desipramine'},
  {index: '570', value: 'Bupropion'},
  {index: '571', value: 'Trimetrexate'},
  {index: '572', value: 'Bretylium'},
  {index: '573', value: 'Halothane'},
  {index: '574', value: 'Chloroprocaine'},
  {index: '575', value: 'Terazosin'},
  {index: '576', value: 'Ofloxacin'},
  {index: '577', value: 'Itraconazole'},
  {index: '578', value: 'Procarbazine'},
  {index: '579', value: 'Arsenic'},
  {index: '580', value: 'Orphenadrine'},
  {index: '581', value: 'Phenobarbital'},
  {index: '582', value: 'Idarubicin'},
  {index: '583', value: 'Ifosfamide'},
  {index: '584', value: 'Propafenone'},
  {index: '585', value: 'Naloxone'},
  {index: '586', value: 'Domperidone'},
  {index: '587', value: 'Fluoxymesterone'},
  {index: '588', value: 'Pergolide'},
  {index: '589', value: 'Ciclopirox'},
  {index: '590', value: 'Desflurane'},
  {index: '591', value: 'Clindamycin'},
  {index: '592', value: 'Acebutolol'},
  {index: '593', value: 'Brinzolamide'},
  {index: '594', value: 'Flecainide'},
  {index: '595', value: 'Estramustine'},
  {index: '596', value: 'Zopiclone'},
  {index: '597', value: 'Bromocriptine'},
  {index: '598', value: 'Rifapentine'},
  {index: '599', value: 'Nadolol'},
  {index: '600', value: 'Mitoxantrone'},
  {index: '601', value: 'Flumazenil'},
  {index: '602', value: 'Lomustine'},
  {index: '603', value: 'Levobunolol'},
  {index: '604', value: 'Clarithromycin'},
  {index: '605', value: 'Ceftriaxone'},
  {index: '606', value: 'Metipranolol'},
  {index: '607', value: 'Estazolam'},
  {index: '608', value: 'Finasteride'},
  {index: '609', value: 'Anastrozole'},
  {index: '610', value: 'Halofantrine'},
  {index: '611', value: 'Dantrolene'},
  {index: '612', value: 'Rifaximin'},
  {index: '613', value: 'Ketamine'},
  {index: '614', value: 'Budesonide'},
  {index: '615', value: 'Aminophylline'},
  {index: '616', value: 'Quetiapine'},
  {index: '617', value: 'Mivacurium'},
  {index: '618', value: 'Paclitaxel'},
  {index: '619', value: 'Pemoline'},
  {index: '620', value: 'Saquinavir'},
  {index: '621', value: 'Metoclopramide'},
  {index: '622', value: 'Dexamethasone'},
  {index: '623', value: 'Sevoflurane'},
  {index: '624', value: 'Aripiprazole'},
  {index: '625', value: 'Gemfibrozil'},
  {index: '626', value: 'Clomipramine'},
  {index: '627', value: 'Isocarboxazid'},
  {index: '628', value: 'Docetaxel'},
  {index: '629', value: 'Iodixanol'},
  {index: '630', value: 'Olsalazine'},
  {index: '631', value: 'Dasatinib'},
  {index: '632', value: 'Aliskiren'},
  {index: '633', value: 'Desonide'},
  {index: '634', value: 'Sitagliptin'},
  {index: '635', value: 'Posaconazole'},
  {index: '636', value: 'Darunavir'},
  {index: '637', value: 'Sunitinib'},
  {index: '638', value: 'Varenicline'},
  {index: '639', value: 'Hydralazine'},
  {index: '640', value: 'Nelarabine'},
  {index: '641', value: 'Pirbuterol'},
  {index: '642', value: 'Fosamprenavir'},
  {index: '643', value: 'Fosphenytoin'},
  {index: '644', value: 'Polythiazide'},
  {index: '645', value: 'Cefazolin'},
  {index: '646', value: 'Cefoperazone'},
  {index: '647', value: 'Cefotetan'},
  {index: '648', value: 'Cefoxitin'},
  {index: '649', value: 'Ceftizoxime'},
  {index: '650', value: 'Pancuronium'},
  {index: '651', value: 'Cilazapril'},
  {index: '652', value: 'Lithium'},
  {index: '653', value: 'Iohexol'},
  {index: '654', value: 'Ephedrine'},
  {index: '655', value: 'Rasagiline'},
  {index: '656', value: 'Magnesium'},
  {index: '657', value: 'Sodium'},
  {index: '658', value: 'Bezafibrate'},
  {index: '659', value: 'Colchicine'},
  {index: '660', value: 'Neostigmine'},
  {index: '661', value: 'Danazol'},
  {index: '662', value: 'Tiotropium'},
  {index: '663', value: 'Ciclesonide'},
  {index: '664', value: 'Cefepime'},
  {index: '665', value: 'Cefpodoxime'},
  {index: '666', value: 'Paromomycin'},
  {index: '667', value: 'Amrinone'},
  {index: '668', value: 'Bromazepam'},
  {index: '669', value: 'Methamphetamine'},
  {index: '670', value: 'Ursodeoxycholic'},
  {index: '671', value: 'Solifenacin'},
  {index: '672', value: 'Nitrazepam'},
  {index: '673', value: 'Deferasirox'},
  {index: '674', value: 'Valganciclovir'},
  {index: '675', value: 'Hydroxychloroquine'},
  {index: '676', value: 'Amyl'},
  {index: '677', value: 'Molindone'},
  {index: '678', value: 'Thiothixene'},
  {index: '679', value: 'Lincomycin'},
  {index: '680', value: 'Roflumilast'},
  {index: '681', value: 'Thiotepa'},
  {index: '682', value: 'Cyproterone'},
  {index: '683', value: 'Tetrabenazine'},
  {index: '684', value: 'Ixabepilone'},
  {index: '685', value: 'Nebivolol'},
  {index: '686', value: 'Milnacipran'},
  {index: '687', value: 'Permethrin'},
  {index: '688', value: 'Silver'},
  {index: '689', value: 'Methsuximide'},
  {index: '690', value: 'Rufinamide'},
  {index: '691', value: 'Tapentadol'},
  {index: '692', value: 'Prasugrel'},
  {index: '693', value: 'Tolvaptan'},
  {index: '694', value: 'Asenapine'},
  {index: '695', value: 'Rivaroxaban'},
  {index: '696', value: 'Alvimopan'},
  {index: '697', value: 'Temsirolimus'},
  {index: '698', value: 'Saxagliptin'},
  {index: '699', value: 'Telavancin'},
  {index: '700', value: 'Dabigatran'},
  {index: '701', value: 'Betahistine'},
  {index: '702', value: 'Methyltestosterone'},
  {index: '703', value: 'Naphazoline'},
  {index: '704', value: 'Methylnaltrexone'},
  {index: '705', value: 'Polidocanol'},
  {index: '706', value: 'Deferiprone'},
  {index: '707', value: 'Pitavastatin'},
];
export {DrugList};
