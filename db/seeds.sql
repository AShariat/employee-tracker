INSERT INTO departments (department_name)
  VALUES
    ('Electronics'), ('Hardware'), ('Sporting Goods'), ('Garden Center'), ('Toys'), ('Stationary'), ('Furniture'), ('Houseware'), ('Cosmetics'), ('Pharmacy');

INSERT INTO roles (role_title, salary, department_id)
  VALUES
    ('Department Manager', 50000, 1), ('Sales Associate', 40000, 1), ('Cashier', 30000, 1), ('Department Manager', 50000, 2), ('Sales Associate', 40000, 2), ('Cashier', 30000, 2), ('Department Manager', 50000, 3), ('Sales Associate', 40000, 3), ('Cashier', 30000, 3), ('Department Manager', 50000, 4), ('Sales Associate', 40000, 4), ('Cashier', 30000, 4), ('Department Manager', 50000, 5), ('Sales Associate', 40000, 5), ('Cashier', 30000, 5), ('Department Manager', 50000, 6), ('Sales Associate', 40000, 6), ('Cashier', 30000, 6), ('Department Manager', 50000, 7), ('Sales Associate', 40000, 7), ('Cashier', 30000, 7), ('Department Manager', 50000, 8), ('Sales Associate', 40000, 8), ('Cashier', 30000, 8), ('Department Manager', 50000, 9), ('Sales Associate', 40000, 9), ('Cashier', 30000, 9), ('Department Manager', 50000, 10), ('Sales Associate', 40000, 10), ('Cashier', 30000, 10);

INSERT INTO employees (first_name, last_name, manager_id, role_id)
  VALUES
    ('James', 'Fraser', 1, 1),
    ('Jack', 'London', 1, 2),
    ('Robert', 'Bruce', 1, 3),
    ('Peter', 'Greenaway', 2, 4),
    ('Derek', 'Jarman', 2, 5),
    ('Paolo', 'Pasolini', 2, 6),
    ('Heathcote', 'Williams', 3, 7),
    ('Sandy', 'Powell', 3, 8),
    ('Emil', 'Zola', 3, 9),
    ('Sissy', 'Coalpits', 4, 10),
    ('Antoinette', 'Capet', 4, 11),
    ('Samuel', 'Delany', 4, 12),
    ('Tony', 'Duvert', 5, 13),
    ('Dennis', 'Cooper', 5, 14),
    ('Monica', 'Bellucci', 5, 15),
    ('Samuel', 'Johnson', 6, 16),
    ('John', 'Dryden', 6, 17),
    ('Alexander', 'Pope', 6, 18),
    ('Lionel', 'Johnson', 7, 19),
    ('Aubrey', 'Beardsley', 7, 20),
    ('Tulse', 'Luper', 7, 21),
    ('William', 'Morris', 8, 22),
    ('George', 'Shaw', 8, 23),
    ('Arnold', 'Bennett', 8, 24),
    ('Algernon', 'Blackwood', 9, 25),
    ('Rhoda', 'Broughton', 9, 26),
    ('Hart', 'Crane', 9, 27),
    ('Vitorio', 'DeSica', 10, 28),
    ('Wilkie', 'Collins', 10, 29),
    ('Elizabeth', 'Gaskell', 10, 30);