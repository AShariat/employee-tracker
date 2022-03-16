INSERT INTO departments (department_name)
  VALUES
    ('Electronics'), ('Hardware'), ('Sporting Goods'), ('Garden Center'), ('Toys'), ('Stationary'), ('Furniture'), ('Houseware'), ('Cosmetics'), ('Pharmacy');

INSERT INTO roles (role_title, salary, department_id)
  VALUES
    ('Department Manager', 50000, 1), ('Sales Associate', 40000, 1), ('Cashier', 30000, 1);

INSERT INTO employees (first_name, last_name, manager_id, role_id)
  VALUES
    ('James', 'Fraser', 1, 1),
    ('Jack', 'London', 1, 2),
    ('Robert', 'Bruce', 1, 2),
    ('Peter', 'Greenaway', 2, 2),
    ('Derek', 'Jarman', 1, 2),
    ('Paolo', 'Pasolini', 1, 2),
    ('Heathcote', 'Williams', 1, 2),
    ('Sandy', 'Powell', 1, 2),
    ('Emil', 'Zola', 1, 2),
    ('Sissy', 'Coalpits', 1, 2),
    ('Antoinette', 'Capet', 1, 2),
    ('Samuel', 'Delany', 1, 2),
    ('Tony', 'Duvert', 1, 2),
    ('Dennis', 'Cooper', 1, 2),
    ('Monica', 'Bellucci', 1, 2),
    ('Samuel', 'Johnson', 1, 2),
    ('John', 'Dryden', 1, 2),
    ('Alexander', 'Pope', 1, 2),
    ('Lionel', 'Johnson', 1, 2),
    ('Aubrey', 'Beardsley', 1, 2),
    ('Tulse', 'Luper', 1, 2),
    ('William', 'Morris', 1, 2),
    ('George', 'Shaw', 1, 2),
    ('Arnold', 'Bennett', 1, 2),
    ('Algernon', 'Blackwood', 1, 2),
    ('Rhoda', 'Broughton', 1, 2),
    ('Hart', 'Crane', 1, 2),
    ('Vitorio', 'DeSica', 1, 3),
    ('Wilkie', 'Collins', 1, 3),
    ('Elizabeth', 'Gaskell', 1, 3),
    ('George', 'Sand', 1, 3),
    ('Vernon', 'Lee', 1, 3),
    ('Arthur', 'Machen', 1, 3),
    ('Frederick', 'Marryat', 1, 3),
    ('Harriet', 'Martineau', 1, 3),
    ('George', 'Meredith', 1, 3),
    ('Margaret', 'Oliphant', 1, 3),
    ('Anthony', 'Trollope', 1, 3),
    ('Charlotte', 'Yonge', 1, 3),
    ('Horace', 'Walpole', 1, 3),
    ('Matthew', 'Lewis', 1, 3),
    ('William', 'Bedford', 1, 3),
    ('Anne', 'Radcliffe', 1, 3),
    ('Charles', 'Brown', 1, 3),
    ('Eliza', 'Parsons', 1, 3),
    ('Susan', 'Hill', 1, 3),
    ('Sydney', 'Owenson', 1, 3),
    ('Hubert', 'Crackanthorpe', 1, 3),
    ('William', 'Carleton', 1, 3),
    ('Gerald', 'Griffin', 1, 3);